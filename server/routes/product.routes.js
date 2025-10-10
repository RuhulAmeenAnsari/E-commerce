const express = require('express')
const router = express.Router()
const productController = require('../controller/product.controller')
const { userAuthMiddleware } = require('../middleware/auth.middleware')
router.post('/add',userAuthMiddleware,productController.addProduct)


module.exports = router