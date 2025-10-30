import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-black to-[#1c1923] text-gray-300 pt-10 px-6 md:px-20 relative sm:mb-16">
      {/* --- Main Footer Content --- */}
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-10 border-b border-gray-700 pb-10">
        {/* Brand Info */}
        <div className="text-center md:text-left">
          <h1 className="text-2xl font-bold text-white mb-2">
            Cart<span className="text-blue-400">Craze</span>
          </h1>
          <p className="text-sm text-gray-400 max-w-[300px]">
            Discover the latest trends and timeless styles — Shop smart, shop easy with CartCraze.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-lg font-semibold text-white mb-3">Quick Links</h2>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-blue-400">Home</Link></li>
            <li><Link to="/collection" className="hover:text-blue-400">Collections</Link></li>
            <li><Link to="/cart" className="hover:text-blue-400">Cart</Link></li>
            <li><Link to="/contact" className="hover:text-blue-400">Contact Us</Link></li>
          </ul>
        </div>

        {/* Customer Service */}
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-lg font-semibold text-white mb-3">Customer Service</h2>
          <ul className="space-y-2">
            <li><Link to="/policy" className="hover:text-blue-400">Return Policy</Link></li>
            <li><Link to="/faq" className="hover:text-blue-400">FAQs</Link></li>
            <li><Link to="/support" className="hover:text-blue-400">Support</Link></li>
            <li><Link to="/privacy" className="hover:text-blue-400">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-lg font-semibold text-white mb-3">Stay Updated</h2>
          <p className="text-sm text-gray-400 mb-3">Subscribe for offers & updates.</p>
          <div className="flex w-full">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 rounded-l-lg bg-gray-800 text-white focus:outline-none"
            />
            <button className="bg-blue-500 px-4 py-2 rounded-r-lg hover:bg-blue-600 transition-all">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* --- Social Links --- */}
      <div className="flex justify-center md:justify-end gap-5 mt-6 text-gray-400">
        <a href="#" className="hover:text-blue-400"><FaFacebookF /></a>
        <a href="#" className="hover:text-pink-500"><FaInstagram /></a>
        <a href="#" className="hover:text-blue-400"><FaTwitter /></a>
        <a href="#" className="hover:text-red-500"><FaYoutube /></a>
      </div>

      {/* --- Copyright Line --- */}
      <div className="mt-8 w-full text-center text-gray-500 text-sm border-t border-gray-700 pt-4 backdrop-blur-md bg-black/30">
        © {new Date().getFullYear()} <span className="text-white font-semibold">CartCraze</span>. All Rights Reserved.  
        <br className="md:hidden" />
        Designed with ❤️ by <span className="text-blue-400">CartCraze Team</span>.
      </div>
    </footer>
  );
};

export default Footer;
