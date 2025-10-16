
import mongoose from 'mongoose'

async function connectToDB(){
    try {
        const conn =await mongoose.connect(process.env.MONGODB_URI)
        console.log("Database connected successfully at "+conn.connection.host)
    } catch (error) {
        console.log('there was problem connecting to the database')
        process.exit(1)
    }
}

export  default connectToDB