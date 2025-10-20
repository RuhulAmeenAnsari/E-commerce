import React, { useContext, useEffect, useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";
import Title from "../components/Title.jsx";
import { shopDataContext } from "../context/ShopContext.jsx";
import Card from "../components/Card.jsx";
const Collections = () => {
  const [showFilter, setshowFilter] = useState(false);
  let { products } = useContext(shopDataContext);
  products = products?.products || [];

  const [filterProducts, setfilterProducts] = useState([]);
  const [category, setcategory] = useState([]);
  const [subCategory, setsubCategory] = useState([]);
  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setcategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setcategory((prev) => [...prev, e.target.value]);
    }
  };
  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setsubCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setsubCategory((prev) => [...prev, e.target.value]);
    }
  };

  const [sortType, setsortType] = useState("relavent");

  const applyFilter = () => {
    let productCopy = [...products];
    if (category.length > 0) {
      productCopy = productCopy.filter((item) =>
        category.includes(item.category)
      );
    }
    if (subCategory.length > 0) {
      productCopy = productCopy.filter((item) =>
        subCategory.includes(item.subCategory)
      );
    }
    setfilterProducts(productCopy);
  };

  useEffect(() => {
    applyFilter();
  }, [category, subCategory]);

  useEffect(() => {
    setfilterProducts(products);
  }, [products]);

  return (
    <div className="w-[100vw] min-h-[100vh] bg-gradient-to-l from-[#1c1923] to-black flex items-start flex-col md:flex-row justify-start pt-[70px] overflow-x-hidden z-[2]">
      <div
        className={`md:w-[30vw] lg:w-[20vw] w-[100vw] md:min-h-[100vh] p-[20px] border-r-[1px] border-gray-400 text-[#aaf5faj] lg:fixed ${
          showFilter ? "h-[60vh] " : "h-[8vh]"
        }`}
      >
        <p
          className="text-[25px] text-white font-semibold flex gap-[5px] items-center justify-start hover:cursor-pointer"
          onClick={() => setshowFilter((prev) => !prev)}
        >
          FILTERS{" "}
          <span>
            {showFilter == true ? (
              <FaAngleUp className="md:hidden" />
            ) : (
              <FaAngleDown className="md:hidden" />
            )}
          </span>
        </p>
        <div
          className={`border-[2px] border-[#dedcdc] pl-5 py-3 mt-6 rounded-md bg-gray-900/30 ${
            showFilter ? "" : "hidden md:block"
          }`}
        >
          <p className={` text-[18px] text-white `}>CATEGORIES</p>
          <div className="w-[230px] h-[120px] flex items-start justify-center gap-[10px] flex-col ">
            <p className="flex items-center justify-center gap-[10px] text-white text-[16px] font-light">
              <input
                type="checkbox"
                onChange={toggleCategory}
                value={"Men"}
                className="w-3"
              />{" "}
              Men
            </p>
            <p className="flex items-center justify-center gap-[10px] text-white text-[16px] font-light">
              <input
                type="checkbox"
                onChange={toggleCategory}
                value={"Women"}
                className="w-3"
              />{" "}
              Women
            </p>
            <p className="flex items-center justify-center gap-[10px] text-white text-[16px] font-light">
              <input
                type="checkbox"
                onChange={toggleCategory}
                value={"Kids"}
                className="w-3"
              />{" "}
              Kids
            </p>
          </div>
        </div>
        <div
          className={`border-[2px] border-[#dedcdc] pl-5 py-3 mt-6 rounded-md bg-gray-900/30 ${
            showFilter ? "" : "hidden md:block"
          }`}
        >
          <p className=" text-[18px] text-white">SUB-CATEGORIES</p>
          <div className="w-[230px] h-[120px] flex items-start justify-center gap-[10px] flex-col ">
            <p className="flex items-center justify-center gap-[10px] text-white text-[16px] font-light">
              <input
                type="checkbox"
                onChange={toggleSubCategory}
                value={"Top-picks"}
                className="w-3"
              />{" "}
              Top-picks
            </p>
            <p className="flex items-center justify-center gap-[10px] text-white text-[16px] font-light">
              <input
                type="checkbox"
                onChange={toggleSubCategory}
                value={"SummerWear"}
                className="w-3"
              />{" "}
              Summer Wear
            </p>
            <p className="flex items-center justify-center gap-[10px] text-white text-[16px] font-light">
              <input
                type="checkbox"
                onChange={toggleSubCategory}
                value={"WinterWear"}
                className="w-3"
              />{" "}
              Winter Wear
            </p>
          </div>
        </div>
      </div>
      <div className="lg:pl-[20%] md:py-[10px]">
        <div className=" md:w-[80vw] w-[100vw] p-[20px] flex justify-between flex-col lg:flex-row lg:px-[50px]">
          <Title text1={"ALL"} text2={"COLLECTION"} />
          <select
            className="bg-gray-700 w-[60%] md:w-[200px] h-[50px] px-[10px] text-white rounded-lg hover:border-2 hover:border-r-orange-400"
            name=""
            id=""
          >
            <option className="w-[100%] h-[100%] " value="relavent">
              Sort By : Relavent
            </option>
            <option className="w-[100%] h-[100%] " value="low-high">
              Sort By : Low to High
            </option>
            <option className="w-[100%] h-[100%] " value="high-low">
              Sort By : High to Low
            </option>
          </select>
        </div>
        <div className="lg:w-[80vw} md:w-[60vw] w-[100vw] min-h-[70vh] flex items-center text-white justify-center flex-wrap gap-[30px]">
          {Array.isArray(filterProducts) &&
            filterProducts.map((item, index) => (
              <Card
                key={index}
                id={item._id}
                name={item.name}
                price={item.price}
                image={item.image1}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Collections;
