import React, { useState } from "react";
import google from "../assets/google.png";
import { Link, useNavigate } from "react-router-dom";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import axios from "axios";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../utils/Firebase";

const Login = () => {
  const [show, setShow] = useState(false);
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const navigate = useNavigate()

  const handleSubmit = async (e)=>{
    e.preventDefault()
    const user = {
      email,password
    }

    const result = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/user/login`,user)
    if(result.status ==200){
      const data = result.data
      const user = data.user
      console.log(user);
     
    } 
    navigate('/')
    setemail("")
    setpassword("")

  }

  const googleLogin = async()=>{
    try {
      const result = await signInWithPopup(auth,provider)
      let user = result.user;
      let username = user.displayName;
      let email = user.email
      const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/user/googleLogin`,{username,email},{withCredentials:true})
      if(res.status ==200){
       console.log("Login successfully")
       console.log(res);
       navigate('/')
      } 
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="w-[100vw] h-[100vh] bg-gradient-to-l from-[#1c1923] to-black flex flex-col items-center justify-start">
      {/* Header */}
      <div className="text-white mt-[15vh] items-center text-center">
        <h1 className="text-3xl font-semibold">Welcome Back</h1>
        <span>Login to your CartCraze account</span>
      </div>

      {/* Card */}
      <div className="max-w-[600px] w-[90%] h-[450px] border-[1px] border-[#96969635] backdrop-blur-2xl rounded-lg shadow-lg flex items-center mt-3 justify-center">
        <form onSubmit={handleSubmit} className="w-[90%] h-[90%] flex flex-col items-center justify-start mt-10 gap-10">
          {/* Google Login */}
          <div onClick={googleLogin} className="w-[90%] h-[50px] bg-[#426565cae] border-2 border-[#a9a3a335] text-white rounded-lg flex items-center justify-center gap-[10px] py-[20px] cursor-pointer">
            <img className="h-[4vh] w-[20px]" src={google} alt="Google" />
            Login with Google
          </div>

          {/* Divider */}
          <div className="w-[100%] flex gap-4 items-center justify-center">
            <div className="w-[40%] h-[1px] bg-[#a9a3a335]" />
            <h1 className="text-white">OR</h1>
            <div className="w-[40%] h-[1px] bg-[#a9a3a335]" />
          </div>

          {/* Input Fields */}
          <div className="w-[90%] text-white flex flex-col items-center justify-start gap-[15px] relative">
            <input
              className="w-full h-[40px] border-[2px] border-[#96969635] backdrop:blur-sm placeholder-[#413f3fc7] shadow-lg bg-transparent px-[20px] font-semibold rounded-lg"
              placeholder="Email"
              name="email"
              value={email}
              onChange={(e)=>{setemail(e.target.value)}}
              required
              type="email"
            />

            <div className="relative w-full">
              <input
                className="w-full h-[40px] border-[2px] border-[#96969635] backdrop:blur-sm placeholder-[#413f3fc7] shadow-lg bg-transparent px-[20px] font-semibold rounded-lg text-white"
                placeholder="Password"
                name="password"
                value={password}
                onChange={(e)=>{setpassword(e.target.value)}}
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

            {/* Login Button */}
            <button
              type="submit"
              className="h-[40px] w-full bg-orange-500 mt-4 hover:bg-orange-600 text-white font-semibold rounded-lg shadow-lg transition-all duration-300 hover:shadow-orange-400/30 focus:outline-none focus:ring-2 focus:ring-orange-300"
            >
              Login
            </button>

            {/* Redirect Text */}
            <p className="text-sm text-gray-400 text-center font-medium">
              Don’t have an account?{" "}
              <Link
                to="/signup"
                className="text-orange-500 font-semibold hover:underline hover:text-orange-400 cursor-pointer transition"
              >
                Create one
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
