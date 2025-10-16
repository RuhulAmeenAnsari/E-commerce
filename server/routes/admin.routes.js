import express from 'express';
import * as adminController from '../controller/admin.controller.js';
import { AdminAuth } from '../middleware/admin.authMiddleware.js'; // ✅ named import

const router = express.Router();

router.post('/adminLogin', adminController.adminLogin);
router.get('/getAdmin', AdminAuth, adminController.getAdmin);
router.get('/logout', adminController.logoutAdmin);

export default router; // ✅ ES module export
