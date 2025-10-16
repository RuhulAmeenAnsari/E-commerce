import mongoose  from "mongoose" 
import jwt  from 'jsonwebtoken'
import bcrypt  from 'bcrypt' 
const userSchema = mongoose.Schema({


    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
    },
    cartDetails: {
        type: Object,
        default: {}
    }

})

userSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({ id: this.id }, process.env.JWT_SECRET, { expiresIn: "24h" })
    return token
}
userSchema.methods.comparePassword = async function (password) {
    const pass = await bcrypt.compare(password, this.password)
    return pass
}
userSchema.statics.hashpassword = async (password) => {
    const hashedPassword = await bcrypt.hash(password, 10)
    return hashedPassword
}

const user = mongoose.model.user || mongoose.model('user', userSchema)
export default user