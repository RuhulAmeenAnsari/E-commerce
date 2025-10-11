import React, { useState } from "react";
import google from "../assets/google.png";
import { Link } from "react-router";
import { FaRegEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";

const Signup = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="w-[100vw] h-[100vh] bg-gradient-to-l from-[#1c1923] to-black flex flex-col items-center justify-start">
      <div className="text-white mt-[15vh] items-center text-center">
        <h1 className="text-3xl">Register yourself</h1>
        <span>Welcome to CartCraze, place your order </span>
      </div>
      <div className="max-w-[600px] w-[90%] h-[500px]  border-[1px] border-[#96969635] backdrop-blur-2xl rounded-lg shadow-lg flex items-center mt-3 justify-center">
        <form
          className="w-[90%] h-[90%] flex flex-col items-center justify-start mt-14 gap-10  "
          action=""
        >
          <div className="w-[90%] h-[50px] bg-[#426565cae] border-2 border-[#a9a3a335] text-white rounded-lg items-center flex justify-center gap-[10px] py-[20px] cursor-pointer">
            <img className="h-[4vh] w-[20px]" src={google} alt="" /> Register
            with google
          </div>
          <div className="w-[100%] flex gap-4 items-center justify-center">
            <div className="w-[40%] h-[1px] bg-[#a9a3a335] "></div>
            <h1 className="text-white">OR</h1>
            <div className="w-[40%] h-[1px] bg-[#a9a3a335] "></div>
          </div>
          <div className="w-[90%] h-[400px] text-white flex flex-col items-center justify-start gap-[15px]">
            <input
              className="w-[100%] h-[40px] border-[2px] border-[#96969635] backdrop:blur-sm placeholder-[#413f3fc7] shadow-lg bg-transparent px-[20px] font-semibold rounded-lg"
              placeholder="Username"
              name="username"
              required
              type="text"
            />
            <input
              className="w-[100%] h-[40px] border-[2px] border-[#96969635] backdrop:blur-sm placeholder-[#413f3fc7] shadow-lg bg-transparent px-[20px] font-semibold rounded-lg"
              placeholder="Email"
              name="email"
              required
              type="email"
            />
            <input
              className="w-[100%] h-[40px] border-[2px] relative border-[#96969635] backdrop:blur-sm placeholder-[#413f3fc7] shadow-lg bg-transparent px-[20px] font-semibold rounded-lg"
              placeholder="password"
              name="password"
              required
              type={show ? "text" : "password"}
            />
            {show == false ? (
              <FaRegEyeSlash
                onClick={() => setShow((prev) => !prev)}
                className="absolute z-10 bottom-[153px] right-20 text-white  "
              />
            ) : (
              <FaRegEye
                onClick={() => setShow((prev) => !prev)}
                className="absolute z-10 bottom-[153px] right-20 text-white  "
              />
            )}

            <button
              type="submit"
              className="h-[40px] w-full bg-orange-500 mt-4 hover:bg-orange-600 text-white font-semibold rounded-lg shadow-lg transition-all duration-300 hover:shadow-orange-400/30 focus:outline-none focus:ring-2 focus:ring-orange-300"
            >
              Create Account
            </button>
            <p className="text-sm text-gray-400 text-center font-medium">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-orange-500 font-semibold hover:underline hover:text-orange-400 cursor-pointer transition"
              >
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
