import React, { useContext, useEffect, useState } from "react";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import cartcraze from "../assets/CartCraze.png";
import { IoIosLogIn } from "react-icons/io";
import { CiLogout } from "react-icons/ci";
import axios from "axios";
import { UserContext } from "../context/UserContext";
import { IoMdHome } from "react-icons/io";
import { BsCollection } from "react-icons/bs";
import { MdContacts } from "react-icons/md";

const Navbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const { user } = useContext(UserContext);
  const name = user?.username || "";
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  useEffect(() => {
    if (token) navigate("/");
  }, [token, navigate]);

  const handleLogout = async () => {
    try {
      await axios.get(`${import.meta.env.VITE_BACKEND_URL}/user/logout`, {
        withCredentials: true,
      });
      localStorage.removeItem("token");
      navigate("/login");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  const menuItems = [
    { id: 1, title: "Home", link: "/" },
    { id: 2, title: "Collection", link: "/collection" },
    { id: 3, title: "About", link: "/about" },
    { id: 4, title: "Contact", link: "/contact" },
  ];

  return (
    <>
      {/* 🔝 Top Navbar */}
      <nav className="fixed top-0 left-0 w-full backdrop-blur-lg bg-[#1a1a1a]/70 border-b border-white/20 shadow-lg flex items-center justify-between px-4 md:px-8 py-3 z-50">
        {/* Logo */}
        <div>
          <img
            className="md:h-[8vh] h-[5vh] cursor-pointer"
            src={cartcraze}
            onClick={() => navigate("/")}
            alt="CartCraze Logo"
          />
        </div>

        {/* 🔍 Search Bar (visible on md and above) */}
        <div className="flex items-center bg-black/20 backdrop-blur-md border border-white/30 rounded-full px-3 py-1 sm:w-[200px] md:w-[280px] lg:w-[300px]">
          <input
            type="text"
            placeholder="Search products..."
            className="bg-transparent outline-none text-white placeholder-gray-400 px-2 py-1 w-full"
          />
          <button className="bg-orange-500 text-white px-3 py-1 rounded-full hover:bg-orange-600 transition">
            🔍
          </button>
        </div>

        {/* 🧭 Menu Links (visible on md+) */}
        <div className="hidden md:flex space-x-6">
          {menuItems.map((item) => (
            <Link
              key={item.id}
              to={item.link}
              className="text-white/90 hover:text-orange-500 transition duration-300 font-medium"
            >
              {item.title}
            </Link>
          ))}
        </div>

        {/* 👤 Right Side Icons */}
        <div className="flex items-center gap-4 text-xl text-white/80 relative">
          <FaUser
            className="hover:text-orange-500 transition cursor-pointer"
            onClick={() => setShowProfileMenu((prev) => !prev)}
          />

          {/* Profile dropdown */}
          {showProfileMenu && (
            <div className="absolute top-10 right-0 bg-[#1a1a1a]/90 border border-white/10 rounded-lg p-2">
              {token ? (
                <button
                  onClick={handleLogout}
                  className="px-4 py-1 border border-orange-500 text-orange-500 rounded-full text-sm font-medium hover:bg-orange-500 hover:text-white transition flex items-center gap-1"
                >
                  <CiLogout size={18} /> Logout
                </button>
              ) : (
                <Link
                  to="/login"
                  className="px-4 py-1 border border-white/30 text-white rounded-full text-sm font-medium hover:bg-white/20 transition flex items-center gap-1"
                >
                  <IoIosLogIn size={18} /> Login
                </Link>
              )}
            </div>
          )}

          {token && (
            <div className="hidden md:block text-white text-sm font-medium">
              {name}
            </div>
          )}

          <FaShoppingCart className="hover:text-orange-500 transition cursor-pointer" />

          {/* Desktop Logout/Login */}
          <div className="hidden md:flex items-center space-x-3">
            {token ? (
              <button
                onClick={handleLogout}
                className="px-4 py-1 border border-orange-500 text-orange-500 rounded-full text-sm font-medium hover:bg-orange-500 hover:text-white transition flex items-center gap-1"
              >
                <CiLogout size={18} /> Logout
              </button>
            ) : (
              <Link
                to="/login"
                className="px-4 py-1 border border-white/30 text-white rounded-full text-sm font-medium hover:bg-white/20 transition flex items-center gap-1"
              >
                <IoIosLogIn size={18} /> Login
              </Link>
            )}
          </div>
        </div>
      </nav>

      {/* 🔻 Bottom Navigation Bar (mobile + medium) */}
      <div className="fixed bottom-0 left-0 w-full bg-[#1a1a1a]/70 backdrop-blur-md border-t border-white/10 flex justify-evenly items-center py-3 text-white text-2xl sm:flex md:flex lg:hidden z-50">
        <Link to="/" className="flex flex-col items-center gap-1 hover:text-orange-500 transition">
          <IoMdHome />
          <span className="text-[10px]">Home</span>
        </Link>
        <Link to="/collection" className="flex flex-col items-center gap-1 hover:text-orange-500 transition">
          <BsCollection />
          <span className="text-[10px]">Collection</span>
        </Link>
        <Link to="/contact" className="flex flex-col items-center gap-1 hover:text-orange-500 transition">
          <MdContacts />
          <span className="text-[10px]">Contact</span>
        </Link>
        <Link to="/cart" className="flex flex-col items-center gap-1 hover:text-orange-500 transition">
          <FaShoppingCart />
          <span className="text-[10px]">Cart</span>
        </Link>
      </div>
    </>
  );
};

export default Navbar;
