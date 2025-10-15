import React, { useState } from "react";
import Nav from "../components/Nav";
import Sidebar from "../components/Sidebar";
import uploadImage from "../assets/uploadImg.png";

const Add = () => {
  let [image1, setImage1] = useState(false);
  let [image2, setImage2] = useState(false);
  let [image3, setImage3] = useState(false);
  let [image4, setImage4] = useState(false);
  const [name, setname] = useState("");
  const [description, setDescription] = useState("");
  const [category, setcategory] = useState("Men");
  const [price, setprice] = useState("");
  const [subCategory, setsubCategory] = useState("Top-picks");
  const [bestseller, setbestseller] = useState(false);
  const [sizes, setsizes] = useState([]);

  const handleAddProduct = async (e) => {};
  return (
    <div className=" w-[100vw] min-h-[100vh] bg-gradient-to-l from-[#1c1923] to-black overflow-x-hidden text-white relative">
      <Nav />
      <Sidebar />

      <div className="w-[85%] h-[100%] flex items-center justify-start overflow-x-hidden absolute right-0 bottom-[5%]">
        <form
          className="w-[100%] md:w-[90%] h-[100%] mt-[70px] flex flex-col gap-[30px] py-[60px] px-[30px] md:px-[60px]"
          action=""
        >
          <div className="w-[400px] h-[50px] text-[25px] md:text-[40px] text-white">
            Add Product Page
          </div>
          <div className="w-[80%] h-[130px] flex items-start justify-center flex-col mt-[20px] gap-[10px]">
            <p className="text-[20px]  mt-50 md:text-[25px] font-semibold">
              Upload Image
            </p>
            <div className="w-full flex flex-wrap items-center justify-start gap-4 md:gap-6">
              {[image1, image2, image3, image4].map((img, index) => (
                <label
                  key={index}
                  htmlFor={`image${index + 1}`}
                  className="relative w-[80px] h-[80px] md:w-[100px] md:h-[100px] cursor-pointer border-2 border-gray-300 hover:border-orange-400 rounded-lg flex items-center justify-center transition-all duration-200"
                >
                  <img
                    src={!img ? uploadImage : URL.createObjectURL(img)}
                    alt={`Upload ${index + 1}`}
                    className="w-[90%] h-[90%] object-cover rounded-md shadow-lg transition-transform hover:scale-105"
                  />
                  <input
                    type="file"
                    required
                    id={`image${index + 1}`}
                    hidden
                    onChange={(e) => {
                      const file = e.target.files[0];
                      if (!file) return;
                      switch (index) {
                        case 0:
                          setImage1(file);
                          break;
                        case 1:
                          setImage2(file);
                          break;
                        case 2:
                          setImage3(file);
                          break;
                        case 3:
                          setImage4(file);
                          break;
                        default:
                          break;
                      }
                    }}
                  />
                </label>
              ))}
            </div>
          </div>
          <div className="w-[80%] mt-10 h-[100px] flex items-start justify-center flex-col gap-[10px]">
            <p className="text-[20px]  mt-30 md:text-[25px] font-semibold">
              Product Name
            </p>
            <input
              required
              type="text"
              value={name}
              onChange={(e) => setname(e.target.value)}
              placeholder="Enter your Product Name"
              className="w-full max-w-[600px] h-[45px]  rounded-lg  bg-gray-800 px-4 py-2 text-white placeholder-gray-400 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition-all duration-200 hover:border-orange-300 hover:bg-gray-750 shadow-md "
            />
          </div>
          <div className="w-[80%] mt-10  flex items-start justify-center flex-col gap-[10px]">
            <p className="text-[20px] mt-10 md:text-[25px] font-semibold">
              Product Description
            </p>
            <textarea
              required
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
              type="text"
              placeholder="Enter your Product Name"
              className="w-full max-w-[600px] h-[100px]  rounded-lg  bg-gray-800 px-4 py-2 text-white placeholder-gray-400 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition-all duration-200 hover:border-orange-300 hover:bg-gray-750 shadow-md "
            />
          </div>
          <div className="w-[80%] flex items-center gap-[10px] flex-wrap">
            <div className="md:w-[30%] w-[100%] flex items-start sm:justify-center  flex-col gap-[10px]">
              <p className="text-[20px] w-[100%] md:text-[25px] font-semibold">
                Product Category
              </p>
              <select
                required
                onChange={(e) => setcategory(e.target.value)}
                value={category}
                name=""
                id=""
                className="bg-gray-700 mb-3 w-[60%] py-[7px] rounded-lg px-[10px] hover:border-[2px] hover:border-orange-400"
              >
                <option value="Men">Men</option>
                <option value="Women">Women</option>
                <option value="Kids">Kids</option>
              </select>
            </div>
            <div className="md:w-[30%] w-[100%] flex items-start sm:justify-center  flex-col gap-[10px]">
              <p className="text-[20px] w-[100%] md:text-[25px] font-semibold">
                Sub-Category
              </p>
              <select
                required
                onChange={(e) => setsubCategory(e.target.value)}
                value={subCategory}
                name=""
                id=""
                className="bg-gray-700 w-[60%] py-[7px] rounded-lg px-[10px] hover:border-[2px] hover:border-orange-400  mb-3"
              >
                <option value="Top-picks">Top-picks</option>
                <option value="SummerWear">Summer Wear</option>
                <option value="WinterWear">Winter Wear</option>
              </select>
            </div>
          </div>
          <div className="w-[80%]  h-[100px] flex items-start justify-center flex-col gap-[10px]">
            <p className="text-[20px]  md:text-[25px] font-semibold">
              Product Price
            </p>
            <input
              required
              value={price}
              onChange={(e) => setprice(e.target.value)}
              type="number"
              placeholder="for example : Rs. 2000/- "
              className="w-full max-w-[600px] h-[45px]  rounded-lg  bg-gray-800 px-4 py-2 text-white placeholder-gray-400 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition-all duration-200 hover:border-orange-300 hover:bg-gray-750 shadow-md "
            />
          </div>

          <div className="w-[80%] flex flex-col items-start justify-center gap-3 py-2 md:py-0">
            <p className="text-[20px] md:text-[25px] font-semibold">
              Product Size
            </p>

            <div className="flex items-center justify-start gap-3 flex-wrap">
              {["S", "M", "L", "XL", "XXL"].map((size) => (
                <div
                  key={size}
                  className={`px-5 py-2 rounded-lg text-[18px] font-medium cursor-pointer border-2 transition-all duration-200
          ${
            sizes.includes(size)
              ? "bg-green-200 text-black border-cyan-400"
              : "bg-gray-400 text-black border-transparent hover:border-orange-400"
          }`}
                  onClick={() =>
                    setsizes((prev) =>
                      prev.includes(size)
                        ? prev.filter((item) => item !== size)
                        : [...prev, size]
                    )
                  }
                >
                  {size}
                </div>
              ))}
            </div>
          </div>
          <div className="w-[80%] flex items-center justify-start gap-[10px] mt-[20px]">
            <input
              type="checkbox"
              className="w-[25px] h-[25px] cursor-pointer"
            />
            <label
              htmlFor="checkbox"
              className="text-[18px] md:text-[22px] font-semibold"
            >
              Add to BestSeller
            </label>
          </div>
          <button className="w-[20vw] mb-4 md:w-[20vw] px-6 py-2 md:px-8 md:py-3 bg-orange-500 text-white  font-semibold text-sm md:text-base rounded-lg shadow-md hover:bg-orange-600 active:scale-95 focus:outline-none focus:ring-2 focus:ring-orange-300 transition-all duration-200">
            Add New Item
          </button>
        </form>
      </div>
    </div>
  );
};

export default Add;
