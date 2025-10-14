const express = require('express')
const app = express()
const cors = require('cors')
const dotenv = require('dotenv')
dotenv.config()
const connectToDB = require('./config/db.js')
const userRouter = require('./routes/user.routes.js')
const cookieParser = require('cookie-parser')
const ProductRoutes = require('./routes/product.routes.js')
const adminRoutes = require('./routes/admin.routes.js')

connectToDB()
app.use(cookieParser())
app.use(express.json())
app.use(cors({
    origin: ["http://localhost:5173","http://localhost:5174"],  
    credentials: true,                
  }));
app.use('/user', userRouter)
app.use('/product', ProductRoutes)
app.use('/admin',adminRoutes)



module.exports = app