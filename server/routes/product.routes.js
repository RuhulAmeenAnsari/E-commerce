const express = require('express')
const router = express.Router()
const productController = require('../controller/product.controller')
const { userAuthMiddleware } = require('../middleware/auth.middleware')
router.post('/add',userAuthMiddleware,productController.addProduct)
router.get('/allProducts',userAuthMiddleware,productController.getAllProducts)


module.exports = router