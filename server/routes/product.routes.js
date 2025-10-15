const express = require('express')
const router = express.Router()
const productController = require('../controller/product.controller')
const { userAuthMiddleware } = require('../middleware/auth.middleware')
const { default: upload } = require('../middleware/multer')
router.post('/addproduct', upload.fields([
  { name: "image1", maxCount: 1 }, 
  { name: "image2", maxCount: 1 },
  { name: "image3", maxCount: 1 },
  { name: "image4", maxCount: 1 }]), productController.addProduct)
router.get('/allProducts', userAuthMiddleware, productController.getAllProducts)


module.exports = router