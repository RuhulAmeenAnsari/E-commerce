import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { shopDataContext } from "../context/ShopContext";

const ProductDetails = () => {
  let { productId } = useParams();
  let { products, currency } = useContext(shopDataContext);
  products = products?.products;

  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");

  const fetchProductData = async () => {
    if (products && Array.isArray(products)) {
      const foundProduct = products.find((item) => item._id === productId);
      if (foundProduct) {
        setProductData(foundProduct);
        setImage(foundProduct.image1);
      }
    }
  };

  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  if (!productData)
    return (
      <div className="flex items-center justify-center h-screen text-white text-lg">
        Loading Product Details...
      </div>
    );

  return (
    <div className="bg-gradient-to-l from-[#141218] to-black text-white min-h-screen py-12 px-6 md:px-16">
      <div className="flex flex-col md:flex-row gap-10 md:gap-16">

        <div className="flex flex-col md:flex-row gap-6 w-full md:w-1/2 items-center">

          <div className="flex md:flex-col gap-3">
            {[productData.image1, productData.image2, productData.image3, productData.image4]
              .filter(Boolean)
              .map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt="thumbnail"
                  onClick={() => setImage(img)}
                  className={`w-16 h-16 object-cover rounded-lg cursor-pointer border-2 ${
                    image === img ? "border-blue-400" : "border-transparent"
                  } hover:border-blue-400 transition`}
                />
              ))}
          </div>

          {/* Main Image */}
          <div className="flex-1">
            <img
              src={image}
              alt={productData.name}
              className="w-full max-h-[500px] object-contain rounded-2xl shadow-lg border border-white/10"
            />
          </div>
        </div>

        {/* Right: Product Info */}
        <div className="w-full md:w-1/2 flex flex-col justify-between space-y-6">
          <div>
            <h1 className="text-3xl font-bold">{productData.name}</h1>
            <p className="text-gray-400 text-sm mt-2">{productData.category}</p>
            <p className="text-2xl font-semibold mt-4 text-blue-400">
              {currency} {productData.price}
            </p>

            <p className="mt-4 text-gray-300 text-sm md:text-base leading-relaxed">
              {productData.description ||
                "Discover premium quality and unmatched comfort. A must-have addition to your style collection."}
            </p>
          </div>

          {/* Size Options */}
          {productData.sizes && productData.sizes.length > 0 && (
            <div>
              <h3 className="text-lg font-medium mb-2">Select Size:</h3>
              <div className="flex flex-wrap gap-3">
                {productData.sizes.map((s, index) => (
                  <button
                    key={index}
                    onClick={() => setSize(s)}
                    className={`px-4 py-2 rounded-lg border text-sm transition ${
                      size === s
                        ? "bg-blue-500 border-blue-500"
                        : "border-gray-500 hover:border-blue-400"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Add to Cart Button */}
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <button className="bg-blue-500 hover:bg-blue-600 transition px-6 py-2 rounded-lg font-semibold text-white">
              Add to Cart 🛒
            </button>
            <button className="border border-blue-400 text-blue-400 hover:bg-blue-500 hover:text-white transition px-6 py-2 rounded-lg font-semibold">
              Buy Now ⚡
            </button>
          </div>

          {/* Extra Info */}
          <div className="text-gray-400 text-sm mt-4 border-t border-gray-700 pt-3">
            <p>✅ Easy 7-Day Return Policy</p>
            <p>🚚 Free Delivery on orders above ₹999</p>
            <p>💬 24/7 Customer Support</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
