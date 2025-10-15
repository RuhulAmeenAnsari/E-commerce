const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
  productName: {
    type: String,
    required: true
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
    required: true
  },
  image1: {
    type: String,
    required: true
  },
  image2: {
    type: String,
    required: true
  },
  image3: {
    type: String,
    required: true
  },
  image4: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  subCategory: {
    type: String,
    required: true
  },
  sizes: {
    type: Array,
    required: true
  },
  date: {
    type: Number,
    required: true
  },
  bestSeller: {
    type: Boolean,
  },
  model3D: {
    type: String, // URL of 3D model file (for AR)
  },
}, { timestamps: true })

const Product = mongoose.model('Product', productSchema);

module.exports = Product;