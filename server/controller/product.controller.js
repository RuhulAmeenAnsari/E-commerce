const Product = require('../models/product.model')

module.exports.addProduct = async (req, res) => {
  try {
    const { productName, description, price, category, image, model3D } = req.body
    const newProduct = new Product({ productName, description, price, category, image, model3D })
    await newProduct.save()
    res.status(201).json({ message: "Product added successfully" })
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: "Something went wrong" })
  }
}

module.exports.getAllProducts = async (req,res)=>{
  const products  = await Product.find()
  res.status(200).json({products})
}