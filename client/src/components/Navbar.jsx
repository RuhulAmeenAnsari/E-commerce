import React, { useContext, useEffect, useState } from "react";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import cartcraze from "../assets/CartCraze.png";
import { IoIosLogIn } from "react-icons/io";
import { CiLogout } from "react-icons/ci";
import axios from "axios";
import { UserContext } from "../context/UserContext";

const Navbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const { user, setUser } = useContext(UserContext);
 const name  = (user.username);

  useEffect(() => {
    if (token) {
      navigate("/");
    }
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
    { id: 2, title: "Collection", link: "/shop" },
    { id: 3, title: "About", link: "/deals" },
    { id: 4, title: "Contact", link: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full backdrop-blur-lg bg-[#1a1a1a]/70 border-b border-white/20 shadow-lg flex items-center justify-between px-6 py-3 z-50">
      {/* Logo */}
      <div>
        <img
          className="h-[8vh] cursor-pointer"
          src={cartcraze}
          onClick={() => navigate("/")}
          alt="CartCraze Logo"
        />
      </div>

      {/* Nav Links */}
      <div className="hidden md:flex space-x-8">
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

      {/* Search Bar */}
      <div className="hidden sm:flex items-center bg-black/20 backdrop-blur-md border border-white/30 rounded-full px-3 py-1">
        <input
          type="text"
          placeholder="Search products..."
          className="bg-transparent outline-none text-white placeholder-gray-400 px-2 py-1 w-40 md:w-60"
        />
        <button className="bg-orange-500 text-white px-3 py-1 rounded-full hover:bg-orange-600 transition">
          🔍
        </button>
      </div>

      {/* Icons + Auth */}
      <div className="flex items-center space-x-8 text-xl text-white/80">
        <FaShoppingCart className="hover:text-orange-500 transition cursor-pointer" />
        <FaUser
          className="hover:text-orange-500 transition cursor-pointer"
        />

        {token && <div className="w-32 text-white">{name}</div>}

        <div className="flex items-center space-x-3 ml-2">
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
  );
};

export default Navbar;
