import React, { useContext, useState } from "react";
import axios from "axios";
import {   useNavigate } from "react-router-dom";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import { AdminDataContext } from "../context/AdminContext";

const AdminLogin = () => {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const {adminData , getAdmin} = useContext(AdminDataContext)

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/admin/adminLogin`,
        { email, password },
        { withCredentials: true }
      );

      if (res.status === 200 && res.data.token) {
        localStorage.setItem("adminToken", res.data.token);
        alert("Admin login successful!");
        getAdmin()
        console.log(adminData)
        navigate("/admin-dashboard");
      }
    } catch (error) {
      console.error("Admin login failed:", error.response?.data || error.message);
      alert("Invalid admin credentials. Please try again!");
    }

    setEmail("");
    setPassword("");
  };

  return (
    <div className="w-[100vw] h-[100vh] bg-gradient-to-l from-[#1c1923] to-black flex flex-col items-center justify-start">
      {/* Header */}
      <div className="text-white mt-[15vh] text-center">
        <h1 className="text-3xl font-semibold">Admin Portal</h1>
        <span className="text-gray-400">Login to your Admin Dashboard</span>
      </div>

      {/* Card */}
      <div className="max-w-[600px] w-[90%] h-[400px] border-[1px] border-[#96969635] backdrop-blur-2xl rounded-lg shadow-lg flex items-center mt-6 justify-center">
        <form
          onSubmit={handleSubmit}
          className="w-[90%] h-[90%] flex flex-col items-center justify-start mt-10 gap-8"
        >
          {/* Input Fields */}
          <div className="w-[90%] text-white flex mt-16 flex-col items-center justify-start gap-[20px] relative">
            {/* Email */}
            <input
              className="w-full h-[45px] border-[2px] border-[#96969635] bg-transparent placeholder-[#777] text-white px-[20px] font-semibold rounded-lg shadow-lg"
              placeholder="Admin Email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              type="email"
            />

            {/* Password */}
            <div className="relative w-full">
              <input
                className="w-full h-[45px] border-[2px] border-[#96969635] bg-transparent placeholder-[#777] text-white px-[20px] font-semibold rounded-lg shadow-lg"
                placeholder="Password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                type={show ? "text" : "password"}
              />
              {show ? (
                <FaRegEyeSlash
                  onClick={() => setShow((prev) => !prev)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white cursor-pointer text-lg hover:text-orange-400 transition"
                />
              ) : (
                <FaRegEye
                  onClick={() => setShow((prev) => !prev)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white cursor-pointer text-lg hover:text-orange-400 transition"
                />
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="h-[45px] w-full bg-orange-500 mt-4 hover:bg-orange-600 text-white font-semibold rounded-lg shadow-lg transition-all duration-300 hover:shadow-orange-400/30 focus:outline-none focus:ring-2 focus:ring-orange-300"
            >
              Login as Admin
            </button>

           
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
