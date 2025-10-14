import jwt from 'jsonwebtoken'

export const AdminAuth = async(req,res,next)=>{

    try {
        const token = req.cookies.token || req.headers.authorization?.split(' ')[0]
        if (!token) {
            return res.status(401).json({ message: "Unauthorized, token not valid" })
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        

        if (!decoded) {
            return res.status(401).json({ message: "Unauthorized" })
        }

        req.adminEmail = process.env.ADMIN_EMAIL
        next()
    } catch (error) {
        return res.status(500).json({ error: "Unauthorized Admin access" })
    }

}