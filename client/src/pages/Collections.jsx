import React, { useEffect, useState } from "react";
import axios from "axios";

const Collections = () => {
  const [collections, setCollections] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchCollections = async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/product/allProducts`
      );
      setCollections(res.data.products || res.data || []);
    } catch (error) {
      console.error("Error fetching collections:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCollections();
  }, []);

  return (
    <div className="min-h-screen w-full bg-gray-100 text-gray-900 py-10 px-4 sm:px-8 md:px-16">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
          Explore Collections
        </h1>
        <div className="mt-4 sm:mt-0">
          <select className="px-4 py-2 border rounded-lg shadow-sm text-gray-700 focus:ring-2 focus:ring-orange-500 outline-none">
            <option value="">Sort By</option>
            <option value="priceLow">Price: Low to High</option>
            <option value="priceHigh">Price: High to Low</option>
            <option value="newest">Newest First</option>
          </select>
        </div>
      </div>

      {/* Loading State */}
      {loading ? (
        <p className="text-center text-gray-500 text-lg mt-20">Loading collections...</p>
      ) : collections.length === 0 ? (
        <div className="flex flex-col items-center justify-center mt-20">
          <img
            src="https://cdn-icons-png.flaticon.com/512/4076/4076500.png"
            alt="No Items"
            className="w-[150px] mb-4 opacity-60"
          />
          <h2 className="text-xl font-semibold">No Collections Found</h2>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
          {collections.map((item) => (
            <div
              key={item._id}
              className="bg-white rounded-xl shadow hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer group"
            >
              <div className="relative">
                <img
                  src={item.image1?.url || item.image1 || "https://via.placeholder.com/300"}
                  alt={item.name}
                  className="w-full h-[200px] object-contain group-hover:scale-105 transition-transform duration-300"
                />
                {item.bestSeller && (
                  <span className="absolute top-2 left-2 bg-orange-500 text-white text-xs px-2 py-1 rounded-md font-medium">
                    Bestseller
                  </span>
                )}
              </div>
              <div className="p-3">
                <h3 className="font-semibold text-gray-800 text-[15px] truncate">
                  {item.name}
                </h3>
                <p className="text-sm text-gray-500 truncate">
                  {item.category} • {item.subCategory}
                </p>
                <div className="flex justify-between items-center mt-2">
                  <p className="text-orange-500 font-bold text-lg">₹{item.price}</p>
                  <button className="text-sm text-blue-600 hover:underline">
                    View
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Collections;

