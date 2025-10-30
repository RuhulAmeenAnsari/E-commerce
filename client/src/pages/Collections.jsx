import React, { useContext, useEffect, useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import Title from "../components/Title.jsx";
import { shopDataContext } from "../context/ShopContext.jsx";
import Card from "../components/Card.jsx";

const Collections = () => {
  const [showFilter, setShowFilter] = useState(false);
  let { products,search , setsearch } = useContext(shopDataContext);
  products = products?.products || [];

  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState("relavent");
  
  // toggle category filters
  const toggleCategory = (e) => {
    const value = e.target.value;
    setCategory((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
  };

  // toggle sub-category filters
  const toggleSubCategory = (e) => {
    const value = e.target.value;
    setSubCategory((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
  };

  // filter products
  const applyFilter = () => {
    let filtered = [...products];
    if(search){
      filtered = filtered.filter(item=>item.name.toLowerCase().includes(search.toLowerCase()))
    }
    if (category.length > 0) {
      filtered = filtered.filter((item) => category.includes(item.category));
    }
    if (subCategory.length > 0) {
      filtered = filtered.filter((item) => subCategory.includes(item.subCategory));
    }

    // sorting
    if (sortType === "low-high") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortType === "high-low") {
      filtered.sort((a, b) => b.price - a.price);
    }

    setFilterProducts(filtered);
  };

  useEffect(() => {
    applyFilter();
  }, [category, subCategory, sortType,search]);

  useEffect(() => {
    setFilterProducts(products);
  }, [products]);

  return (
    <div className="w-full min-h-screen bg-gradient-to-l pb-[100px] from-[#141218] to-black flex flex-col md:flex-row justify-start pt-[70px] overflow-x-hidden text-white">
      
      {/* ---------- FILTER SIDEBAR ---------- */}
      <div
        className={`md:w-[25vw] lg:w-[18vw] w-full p-6 border-r border-gray-700 
          bg-[#16141b]/60 backdrop-blur-md md:min-h-screen transition-all duration-500 
          ${showFilter ? "h-auto pb-8" : "h-[70px] md:h-auto"} md:static fixed top-[70px] left-0 z-20`}
      >
        <p
          className="text-2xl font-semibold flex items-center justify-between md:justify-start hover:cursor-pointer mb-4"
          onClick={() => setShowFilter((prev) => !prev)}
        >
          FILTERS
          <span className="md:hidden">{showFilter ? <FaAngleUp /> : <FaAngleDown />}</span>
        </p>

        {/* Category Filter */}
        <div className={`${showFilter ? "block" : "hidden md:block"}`}>
          <div className="border border-gray-700 rounded-xl p-4 mb-6 bg-gray-900/40">
            <p className="text-lg font-medium mb-3 text-gray-200">CATEGORIES</p>
            <div className="flex flex-col gap-3">
              {["Men", "Women", "Kids"].map((cat) => (
                <label key={cat} className="flex items-center gap-3 text-gray-300 text-sm">
                  <input
                    type="checkbox"
                    value={cat}
                    onChange={toggleCategory}
                    className="w-4 h-4 accent-orange-400"
                  />
                  {cat}
                </label>
              ))}
            </div>
          </div>

          {/* Sub-category Filter */}
          <div className="border border-gray-700 rounded-xl p-4 bg-gray-900/40">
            <p className="text-lg font-medium mb-3 text-gray-200">SUB-CATEGORIES</p>
            <div className="flex flex-col gap-3">
              {["Top-picks", "SummerWear", "WinterWear"].map((sub) => (
                <label key={sub} className="flex items-center gap-3 text-gray-300 text-sm">
                  <input
                    type="checkbox"
                    value={sub}
                    onChange={toggleSubCategory}
                    className="w-4 h-4 accent-orange-400"
                  />
                  {sub.replace("-", " ")}
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ---------- MAIN COLLECTION SECTION ---------- */}
      <div className="flex-1 w-full px-6 md:px-10 lg:px-16 py-6">
        {/* Header with Title + Sort Dropdown */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8">
          <Title text1={"ALL"} text2={"COLLECTION"} />
          <select
            value={sortType}
            onChange={(e) => setSortType(e.target.value)}
            className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 mt-4 lg:mt-0 text-gray-200 cursor-pointer focus:ring-2 focus:ring-orange-400 transition-all duration-300"
          >
            <option value="relavent">Sort by: Relevant</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 place-items-center ">
          {filterProducts.length > 0 ? (
            filterProducts.map((item, index) => (
              <Card
                key={index}
                id={item._id}
                name={item.name}
                price={item.price}
                image={item.image1}
              />
            ))
          ) : (
            <p className="text-gray-400 text-lg py-10">No products found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Collections;
