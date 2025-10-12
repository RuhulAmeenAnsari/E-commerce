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


module.exports.loginUser = async (req,res)=>{

    const {email , password } = req.body

    const user = await userModel.findOne({email})
    if(!user){
        return res.status(401).json({message : "something went wrong"})
    }
    const comparePass = await user.comparePassword(password)
    if(!comparePass){
        return res.status(401).json({message : "something went wrong"})
    }

    const token = await user.generateAuthToken()
    res.cookie("token",token)
    res.status(200).json({token,user})

}

module.exports.userProfile=async(req,res)=>{
    res.status(200).json({user:req.user})
}

module.exports.googleSignup = async (req,res)=>{

    try {
        const {username , email} = req.body
        let user = await userModel.findOne({email})
        if(!user){
         user = await userModel.create({username,email})
        }
        const token = await user.generateAuthToken()
        res.cookie("token",token)
        res.status(200).json({token,user})
    } catch (error) {
        console.log("something went wrong",error)
        return res.status(500).json({error:"registration failed"})
    }

}

module.exports.googleLogin = async (req,res)=>{

    try {
        const {username , email} = req.body
        let user = await userModel.findOne({email})
        if(!user){
        return res.status(401).json({message : " user not found "})
        }
        const token = await user.generateAuthToken()
        res.cookie("token",token)
        res.status(200).json({token,user})
    } catch (error) {
        console.log("something went wrong",error)
        return res.status(500).json({error:"login failed"})
    }

}