import React, { useEffect, useState } from "react";
import Nav from "../components/Nav";
import Sidebar from "../components/Sidebar";
import axios from "axios";
import { FaTrash } from "react-icons/fa";

const Lists = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch all products
  const fetchProducts = async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/product/allProducts`,
        { withCredentials: true }
      );
      console.log(res.data);
      // Adjust if backend returns { products: [...] }
      setProducts(res.data.products || res.data || []);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  // Delete product
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this product?")) return;
    try {
      await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/product/delete/:${id}`,
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
    <div className="w-[100vw] min-h-[100vh] bg-gradient-to-l from-[#1c1923] to-black text-white overflow-x-hidden relative">
      <Nav />
      <Sidebar />

      <div className="w-[85%] min-h-[100vh] absolute right-0 top-[70px] px-6 md:px-10 py-10">
        <div className="w-full flex flex-col md:flex-row md:items-center justify-between mb-8">
          <h1 className="text-[30px] md:text-[40px] font-semibold px-5">Product List</h1>
          <button
            onClick={fetchProducts}
            className="bg-orange-500 text-white px-5 py-2 md:ml-40 rounded-lg font-medium hover:bg-orange-600 active:scale-95 focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all duration-200 w-1/2 shadow-md"
          >
            Refresh
          </button>
        </div>

        {/* Product Grid */}
        {loading ? (
          <p className="text-center text-gray-400 text-lg mt-20">Loading products...</p>
        ) : products.length === 0 ? (
          <div className="flex flex-col items-center justify-center text-gray-400 mt-20">
            <img
              src="https://cdn-icons-png.flaticon.com/512/4076/4076500.png"
              alt="Empty"
              className="w-[150px] mb-4 opacity-60"
            />
            <h2 className="text-xl font-medium">Nothing to display</h2>
            <p className="text-sm text-gray-500 mt-1">No products found in the database.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <div
                key={product._id}
                className="bg-gray-800 border border-gray-700 rounded-xl shadow-md hover:shadow-orange-400/20 hover:scale-[1.02] transition-all duration-300 p-4 flex flex-col items-center justify-between"
              >
                <img
                  src={product.image1?.url || product.image1 || "https://via.placeholder.com/200"}
                  alt={product.name}
                  className="w-[90%] h-[200px] object-cover rounded-lg mb-3"
                />
                <div className="w-full flex flex-col gap-1 text-center">
                  <h2 className="text-[20px] font-semibold truncate">{product.name}</h2>
                  <p className="text-gray-400 text-sm truncate">
                    {product.category} - {product.subCategory}
                  </p>
                  <p className="text-orange-400 font-bold text-[18px]">₹{product.price}</p>
                </div>
                <div className="w-full flex items-center justify-center mt-3">
                  <button
                    onClick={() => handleDelete(product._id)}
                    className="flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 rounded-md text-white font-medium transition-all duration-200 shadow-md"
                  >
                    <FaTrash className="text-white" /> Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Lists;
