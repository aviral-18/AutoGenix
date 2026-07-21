import jwt from "jsonwebtoken";
import User from "../models/User.js";

// sab users ko token assigned hota h userID k lie
// ye token se req.user mai users ki details dalega

export const protect = async (req, res, next)=>{
    const token = req.headers.authorization;
    if(!token){
        return res.json({success: false, message: "not authorized"})
    }
    try {
        const userId = jwt.decode(token, process.env.JWT_SECRET)

        if(!userId){
            return res.json({success: false, message: "not authorized"})
        }
        req.user = await User.findById(userId).select("-password")
        next();
    } catch (error) {
        return res.json({success: false, message: "not authorized"})
    }
}