const express = require('express')
const app = express()
const cors = require('cors')
const dotenv = require('dotenv')
dotenv.config()
const connectToDB = require('./config/db.js')
const userRouter = require('./routes/user.routes.js')
const cookieParser = require('cookie-parser')
const ProductRoutes = require('./routes/product.routes.js')


connectToDB()
app.use(cookieParser())
app.use(express.json())
app.use(cors())
app.use('/user', userRouter)
app.use('/product', ProductRoutes)



module.exports = app