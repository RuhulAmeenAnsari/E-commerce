import React, { useEffect, useState } from "react";
import Nav from "../components/Nav";
import Sidebar from "../components/Sidebar";
import axios from "axios";
import { FaTrash } from "react-icons/fa";

const Lists = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/product/allProducts`,
        { withCredentials: true }
      );
      setProducts(res.data.products || res.data || []);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this product?")) return;
    try {
      await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/product/delete/${id}`,
        { withCredentials: true }
      );
      setProducts(products.filter((product) => product._id !== id));
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="w-screen min-h-screen bg-gradient-to-l from-[#1c1923] to-black text-white overflow-x-hidden relative">
      <Nav />
      <Sidebar />

      <div className="absolute right-0 top-[70px] w-full md:w-[85%] min-h-screen px-4 sm:px-6 md:px-10 py-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
          <h1 className="text-[28px] md:text-[38px] font-semibold px-3">
            Product Inventory
          </h1>
          <button
            onClick={fetchProducts}
            className="bg-orange-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-orange-600 active:scale-95 transition-all duration-200 shadow-md md:w-auto w-[50%] mx-auto mt-3 md:mt-0"
          >
            Refresh
          </button>
        </div>

        {loading ? (
          <p className="text-center text-gray-400 text-lg mt-20">
            Loading products...
          </p>
        ) : products.length === 0 ? (
          <div className="flex flex-col items-center justify-center text-gray-400 mt-20">
            <img
              src="https://cdn-icons-png.flaticon.com/512/4076/4076500.png"
              alt="Empty"
              className="w-[120px] mb-4 opacity-60"
            />
            <h2 className="text-xl font-medium">No Products Found</h2>
            <p className="text-sm text-gray-500 mt-1">
              Add some items to display here.
            </p>
          </div>
        ) : (
          <div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 
                       xl:grid-cols-5 gap-6 md:gap-8 justify-items-center"
          >
            {products.map((product) => (
              <div
                key={product._id}
                className="bg-[#111] border md:ml-20 border-gray-700 rounded-xl shadow-lg hover:shadow-orange-400/20 
                           hover:scale-[1.02] transition-all duration-300 flex flex-col justify-between 
                           w-[90%] sm:w-[95%] md:w-[100%] max-w-[240px] p-3"
              >
                <img
                  src={
                    product.image1?.url ||
                    product.image1 ||
                    "https://via.placeholder.com/200"
                  }
                  alt={product.name}
                  className="w-full h-[180px] object-contain rounded-lg mb-3"
                />
                <div className="flex flex-col gap-1 text-center">
                  <h2 className="text-[16px] font-semibold truncate">
                    {product.name}
                  </h2>
                  <p className="text-gray-400 text-sm truncate">
                    {product.category} • {product.subCategory}
                  </p>
                  <p className="text-orange-400 font-bold text-[18px] mt-1">
                    ₹{product.price}
                  </p>

                  <div className="flex justify-center gap-2 mt-2">
                    {product.sizes?.map((size, idx) => (
                      <span
                        key={idx}
                        className="border border-gray-600 text-gray-300 text-xs px-2 py-1 rounded-md"
                      >
                        {size}
                      </span>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => handleDelete(product._id)}
                  className="flex items-center justify-center gap-2 mt-4 bg-red-600 hover:bg-red-700 
                             rounded-md text-white font-medium transition-all duration-200 shadow-md py-2"
                >
                  <FaTrash className="text-white" /> Delete
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Lists;
