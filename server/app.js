const express = require('express')
const app = express()
const cors = require('cors')
const dotenv = require('dotenv')
dotenv.config()
const connectToDB = require('./config/db.js')
const userRouter = require('./routes/user.routes.js')

connectToDB()

app.use(express.json())
app.use(cors())
app.use('/user',userRouter)



module.exports = app