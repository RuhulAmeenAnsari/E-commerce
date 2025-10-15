const { default: uploadOnCloudinary } = require('../config/cloudinary.js')
const Product = require('../models/product.model')

module.exports.addProduct = async (req, res) => {
  try {
    const { productName, description, price, category, subCategory,sizes,bestSeller, model3D } = req.body
    let image1 = await uploadOnCloudinary(req.files.image1[0].path)
    let image2 = await uploadOnCloudinary(req.files.image2[0].path)
    let image3 = await uploadOnCloudinary(req.files.image3[0].path)
    let image4 = await uploadOnCloudinary(req.files.image4[0].path)
    let newProductData = {
      productName,
      description, 
      price : Number(price), 
      category, 
      subCategory,
      sizes : JSON.parse(sizes),
      bestSeller : bestSeller === "true" ? true : false, 
      model3D,
      date : Date.now(),
      image1,
      image2,
      image3,
      image4
    }
    const newProduct = await Product.create(newProductData)
    
    res.status(201).json({newProduct })
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: "Add product error " })
  }
}

module.exports.getAllProducts = async (req,res)=>{
  const products  = await Product.find()
  res.status(200).json({products})
}