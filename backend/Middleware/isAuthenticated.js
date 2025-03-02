import jwt from 'jsonwebtoken'
import User from '../Models/user.model.js';


export const isAuthenticated = async(req,res,next) => {
    try {
        
        const token = req.cookies.token;
        if(!token){
            return res.status(401).json({
                success:false,
                message:"User Not Authenticated"
            })
        }

        const decode = await jwt.verify(token,process.env.JWT_SECRET);

        req.userId = decode.userId;

        next()

    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"Error in isAuthenticated Middleware" + error.message
        })
    }
}

export const isRecruiter = async(req,res,next) => {
    try {
        
        const recruiterId = req.userId 

        const isRecruiter = await User.findById(recruiterId)

        if(isRecruiter?.role == "recruiter"){
            next()
        }

        return res.status(403).json({
                success:false,
                message:"Only Recuriter is Allowed"
            })
        

    } catch (error) {
        return res.status(500).json({
            success:false,
            message:error?.message
        })
    }
}