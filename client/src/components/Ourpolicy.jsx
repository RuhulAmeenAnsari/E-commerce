import React from 'react'
import Title from './Title'
import { FaExchangeAlt, FaHeadset, FaUndoAlt } from 'react-icons/fa'

const Ourpolicy = () => {
  const policies = [
    {
      icon: <FaExchangeAlt className="text-[40px] text-blue-400 mb-4" />,
      title: "Easy Exchange",
      desc: "Hassle-free product exchange within a few simple steps.",
    },
    {
      icon: <FaUndoAlt className="text-[40px] text-green-400 mb-4" />,
      title: "7 Days Easy Return",
      desc: "Return your products within 7 days without any stress.",
    },
    {
      icon: <FaHeadset className="text-[40px] text-yellow-400 mb-4" />,
      title: "Customer Support",
      desc: "24/7 dedicated support to solve your queries instantly.",
    },
  ];

  return (
    <div className="w-full py-16 bg-gradient-to-l from-[#1c1923] to-black text-white text-center">
      <Title text1={"OUR"} text2={"POLICY"} />
      <p className="text-gray-300 text-sm md:text-lg mb-10">
        Customer-friendly policies committed to your satisfaction and safety.
      </p>

      <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20 px-5">
        {policies.map((policy, index) => (
          <div
            key={index}
            className="w-[80%] md:w-[25%]  p-6 rounded-2xl shadow-lg shadow-blue-900/40 hover:scale-105 transition-all duration-300"
          >
            <div className="flex flex-col items-center">
              {policy.icon}
              <h3 className="text-lg md:text-xl font-semibold mb-2">{policy.title}</h3>
              <p className="text-gray-400 text-sm">{policy.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ourpolicy;
