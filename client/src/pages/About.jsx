import React from "react";
import Title from "../components/Title";
import aboutImg from "../assets/about-banner.png"; // (Add any about banner image in your assets folder)
import { useNavigate } from "react-router";

const About = () => {
  const navigate = useNavigate()
  return (
    <div className="min-h-screen bg-gradient-to-l from-[#1c1923] to-black text-gray-300 flex flex-col items-center justify-start pt-[80px] px-6 md:px-16 lg:px-24 overflow-x-hidden">
      
      {/* Title */}
      <Title text1={"ABOUT"} text2={"US"} />

      {/* Intro Section */}
      <section className="text-center max-w-4xl mt-4">
        <p className="text-sm md:text-lg text-gray-400">
          Welcome to <span className="text-blue-400 font-semibold">CartCraze</span> — your one-stop destination for trendy, 
          high-quality, and affordable fashion. We’re passionate about making 
          shopping effortless, fun, and stylish for everyone.
        </p>
      </section>

      {/* Mission Section */}
      <section className="flex flex-col md:flex-row items-center justify-center gap-10 mt-12 w-full">
        <img
          src={aboutImg}
          alt="About CartCraze"
          className="w-full md:w-1/2 rounded-2xl shadow-lg object-cover"
        />
        <div className="w-full md:w-1/2 flex flex-col items-start justify-center text-left space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Our Mission 🎯
          </h2>
          <p className="text-gray-400 leading-relaxed">
            At <span className="text-blue-400 font-semibold">CartCraze</span>, our mission is simple — to bring you the best of 
            fashion and lifestyle at your fingertips. From everyday essentials 
            to exclusive collections, we aim to redefine how you shop online 
            by combining comfort, quality, and trend-driven style.
          </p>
          <p className="text-gray-400 leading-relaxed">
            We’re constantly updating our catalog with the latest trends while 
            maintaining transparency, affordability, and customer trust.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="mt-16 w-full flex flex-col items-center justify-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
          What We Stand For 💎
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-gray-900/30 border border-gray-700 rounded-xl p-6 hover:scale-105 transition-all duration-300">
            <h3 className="text-lg font-semibold text-blue-400 mb-2">
              Quality & Trust
            </h3>
            <p className="text-gray-400 text-sm">
              Every product is hand-picked and quality-checked to ensure you 
              get only the best in comfort and design.
            </p>
          </div>

          <div className="bg-gray-900/30 border border-gray-700 rounded-xl p-6 hover:scale-105 transition-all duration-300">
            <h3 className="text-lg font-semibold text-blue-400 mb-2">
              Fast & Secure Shopping
            </h3>
            <p className="text-gray-400 text-sm">
              Enjoy a seamless shopping experience with fast delivery, 
              secure payments, and hassle-free returns.
            </p>
          </div>

          <div className="bg-gray-900/30 border border-gray-700 rounded-xl p-6 hover:scale-105 transition-all duration-300">
            <h3 className="text-lg font-semibold text-blue-400 mb-2">
              Customer First
            </h3>
            <p className="text-gray-400 text-sm">
              Your satisfaction drives us. Our support team is always 
              available to assist with quick resolutions and easy exchanges.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mt-20 mb-16 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          Join the <span className="text-blue-400">CartCraze</span> Family ❤️
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-6">
          Be part of a growing community that loves to explore, express, 
          and elevate their style with confidence.
        </p>
        <button onClick={()=>navigate('/collection')} className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full font-medium transition-all duration-300">
          Explore Collections
        </button>
      </section>
    </div>
  );
};

export default About;
