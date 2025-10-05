const userModel = require('../models/user.model')

module.exports.registerUser = async (req,res) =>{
    const {username , email , password } = req.body
    const isAlreadyRegistered = await userModel.findOne({email})
    if(isAlreadyRegistered){
        return res.status(401).json({message : "already registered with this email"})
    }
    const hashedPassword = await userModel.hashpassword(password)

    const user = await userModel.create({
        username,
        email,
        password:hashedPassword
    })

    const token = await user.generateAuthToken()
    res.cookie("token",token)
    res.status(200).json({token,user})
}