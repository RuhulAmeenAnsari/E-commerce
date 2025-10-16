import uploadOnCloudinary from '../config/cloudinary.js'
import Product from '../models/product.model.js'

export const addProduct = async (req, res) => {
  try {
    const { name, description, price, category, subCategory, sizes, bestSeller, model3D } = req.body;

    const image1 = await uploadOnCloudinary(req.files.image1[0].path);
    const image2 = await uploadOnCloudinary(req.files.image2[0].path);
    const image3 = await uploadOnCloudinary(req.files.image3[0].path);
    const image4 = await uploadOnCloudinary(req.files.image4[0].path);

    const newProductData = {
      name, // ✅ matches schema
      description,
      price: Number(price),
      category,
      subCategory,
      sizes: JSON.parse(sizes),
      bestSeller: bestSeller === "true",
      model3D,
      date: Date.now(),
      image1,
      image2,
      image3,
      image4,
    };

    const newProduct = await Product.create(newProductData);
    res.status(201).json({ newProduct });
  } catch (error) {
    console.error("Add product error:", error.message);
    res.status(500).json({ error: error.message });
  }
};


export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find()
    res.status(200).json({ products })
  } catch (error) {
    console.error("list product error")
    res.status(500).json({ error: "lsit product error " })
  }
}

export const reomveProduct = async (req, res) => {
  try {

    let { id } = req.params
    const product = await Product.findByIdAndDelete(id)
    res.status(200).json({ product })
  } catch (error) {

    console.error("list product error")
    res.status(500).json({ error: "lsit product error " })
  }
}
