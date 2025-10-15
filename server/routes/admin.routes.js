const express = require('express')
const router = express.Router()
const adminController = require("../controller/admin.controller")
const adminAuthMiddleware = require('../middleware/admin.authMiddleware')
router.post('/adminLogin',adminController.adminLogin)
router.get('/getAdmin',adminAuthMiddleware.AdminAuth,adminController.getAdmin)
router.get('/logout',adminController.logoutAdmin)

module.exports = router