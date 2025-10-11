import React from "react";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import cartcraze from "../assets/CartCraze.png";

const Navbar = () => {


    


  const navigate = useNavigate()
  const menuItems = [
    { id: 1, title: "Home", link: "/" },
    { id: 2, title: "Shop", link: "/shop" },
    { id: 3, title: "Deals", link: "/deals" },
    { id: 4, title: "Contact", link: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full backdrop-blur-lg bg-white/10 border-b border-white/20 shadow-lg flex items-center justify-between px-6 py-3 z-50">
      {/* Logo */}
      <div>
        <img className="h-[8vh]" src={cartcraze} onClick={()=>navigate('/')} alt="CartCraze Logo" />
      </div>

      {/* Nav Links */}
      <div className="hidden md:flex space-x-8">
        {menuItems.map((item) => (
          <Link
            key={item.id}
            to={item.link}
            className="text-black/90 hover:text-orange-500 transition duration-300 font-medium"
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
          className="bg-transparent outline-none text-white placeholder-black/70 px-2 py-1 w-40 md:w-60"
        />
        <button className="bg-orange-500 text-black px-3 py-1 rounded-full hover:bg-orange-600 transition">
          🔍
        </button>
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-5 text-xl text-black/80">
        <FaShoppingCart className="hover:text-orange-500 transition cursor-pointer" />
        <FaUser className="hover:text-orange-500 transition cursor-pointer" />

        {/* Login & Signup Buttons */}
        <div className="flex items-center space-x-3 ml-2">
          <Link
            to="/login"
            className="px-4 py-1 border border-black/30 text-black rounded-full text-sm font-medium hover:bg-white/20 transition"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="px-4 py-1 bg-orange-500 text-white rounded-full text-sm font-medium hover:bg-orange-600 transition shadow-lg hover:shadow-orange-400/30"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
