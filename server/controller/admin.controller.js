
import jwt from 'jsonwebtoken'


export const adminLogin = async (req,res)=>{

    try {
        const {email , password} = req.body
    if(email == process.env.ADMIN_EMAIL && password == process.env.ADMIN_PASSWORD){
        let token = await jwt.sign({email},process.env.JWT_SECRET,{expiresIn:"7d"})
        res.cookie("token",token)
        return res.status(200).json({token})
    }
   return res.status(400).json({message:"invalid credentials"})
    } catch (error) {
        console.log(error)
        return res.status(500).json({message:"admin login error"})
    }
}


export const getAdmin = async (req,res)=>{

    try {
        let adminEmail = req.adminEmail
        if(!adminEmail){
            return res.status(404).json({message : " Admin not found "})
        }
        return res.status(200).json({
            email:adminEmail,
            role:"admin"
        })
    } catch (error) {
        return res.json({message : `getAdmin error ${error}`})
    }
}
