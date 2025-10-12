const express = require('express')
const router = express.Router()
const userController = require('../controller/user.controller')
const { userAuthMiddleware } = require('../middleware/auth.middleware')

router.post('/signup',userController.registerUser)
router.post('/login',userController.loginUser)
router.post('/googleSignUp',userController.googleSignup)
router.post('/googleLogin',userController.googleLogin)
router.get('/profile',userAuthMiddleware,userController.userProfile)

module.exports = router