import express from 'express';
import * as userController from '../controller/user.controller.js';
import { userAuthMiddleware } from '../middleware/auth.middleware.js';

const router = express.Router();

router.post('/signup',userController.registerUser)
router.post('/login',userController.loginUser)
router.post('/googleSignUp',userController.googleSignup)
router.post('/googleLogin',userController.googleLogin)
router.get('/profile',userAuthMiddleware,userController.userProfile)
router.get('/logout',userController.logoutUser)

export default router