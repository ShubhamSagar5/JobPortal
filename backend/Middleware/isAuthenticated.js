import jwt from 'jsonwebtoken'


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