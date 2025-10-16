import jwt from 'jsonwebtoken'
import userModel from'../models/user.model.js'


export const userAuthMiddleware = async (req, res, next) => {

    try {
        const token = req.cookies.token || req.headers.authorization?.split(' ')[0]
        if (!token) {
            return res.status(401).json({ message: "Unauthorized, token not valid" })
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        const user = await userModel.findById(decoded.id)

        if (!user) {
            return res.status(401).json({ message: "Unauthorized, user not found" })
        }

        req.user = user
        next()
    } catch (error) {
        return res.status(500).json({ error: "Unauthorized access" })
    }

}