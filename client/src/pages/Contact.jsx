import React from "react";
import Title from "../components/Title";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="bg-gradient-to-b from-[#1c1923] to-black text-white min-h-screen py-16 px-6 md:px-20">
      {/* Page Title */}
      <div className="text-center mb-10">
        <Title text1={"CONTACT"} text2={"US"} />
        <p className="text-gray-300 text-sm md:text-base mt-3 max-w-[600px] mx-auto">
          We'd love to hear from you! Reach out for inquiries, support, or
          feedback — our team is here to help you 24/7.
        </p>
      </div>

      {/* Contact Info + Form */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left: Contact Info */}
        <div className="space-y-8">
          <div className="flex items-center gap-5">
            <FaPhoneAlt className="text-blue-400 text-2xl" />
            <div>
              <h3 className="text-lg font-semibold">Phone</h3>
              <p className="text-gray-400">+91 98765 43210</p>
            </div>
          </div>

          <div className="flex items-center gap-5">
            <FaEnvelope className="text-blue-400 text-2xl" />
            <div>
              <h3 className="text-lg font-semibold">Email</h3>
              <p className="text-gray-400">support@cartcraze.com</p>
            </div>
          </div>

          <div className="flex items-center gap-5">
            <FaMapMarkerAlt className="text-blue-400 text-2xl" />
            <div>
              <h3 className="text-lg font-semibold">Address</h3>
              <p className="text-gray-400">
                221B Baker Street, Lucknow, India
              </p>
            </div>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="bg-[#1f1b29]/70 backdrop-blur-lg p-8 rounded-2xl shadow-lg border border-white/10">
          <h2 className="text-xl font-semibold text-center mb-6 text-blue-400">
            Get in Touch
          </h2>
          <form className="space-y-5">
            <div>
              <label className="block text-sm mb-1">Full Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full px-4 py-2 rounded-lg bg-[#2b2638] text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-lg bg-[#2b2638] text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Message</label>
              <textarea
                rows="4"
                placeholder="Write your message..."
                className="w-full px-4 py-2 rounded-lg bg-[#2b2638] text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 transition text-white font-semibold py-2 rounded-lg"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Map Section */}
      <div className="mt-16">
        <iframe
          title="CartCraze Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.005548518962!2d80.9461598751957!3d26.862585676691514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfdb7a3c07e15%3A0x9b48abf6240b07da!2sLucknow!5e0!3m2!1sen!2sin!4v1698158454123!5m2!1sen!2sin"
          width="100%"
          height="300"
          allowFullScreen=""
          loading="lazy"
          className="rounded-2xl border border-white/10"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
