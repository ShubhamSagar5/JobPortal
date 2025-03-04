import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import User from '../Models/user.model.js'

export const register = async(req,res) => {
    try {
        const {fullName,email,phoneNumber,password,role,profilePhoto} = req.body
        console.log(req.body)
        
        if(!fullName || !email || !phoneNumber || !password  || !role ){
            return res.status(400).json({
                success:false,
                message:"Something Missing"
            })
        }

        const hashPassword = await bcrypt.hash(password,10);

        const newUser = new User({
            fullName,
            email,
            phoneNumber,
            password:hashPassword,
            role 
        })

        await newUser.save() 

        return res.status(200).json({
            success:true,
            message:"Account Created Successfully"
        })

    } catch (error) {
        return res.status(500).json({
            success:false,
            message:error.message
        })
    }
}



export const login = async(req,res)=>{
    try {
        const {email,password,role} = req.body 
        if(!email || !password || !role){
            return res.status(400).json({
                success:false,
                message:"Somthing is missing"
            })
        }

        const user = await User.findOne({email:email});
        
        if(!user){
            return res.status(400).json({
                success:false,
                message:"Invalid Email And Password"
            })
        }

        const ispasswordCorrect  = await bcrypt.compare(password,user.password); 

        if(!ispasswordCorrect){
            return res.status(401).json({
                success:false,
                message:"Invalid Email And Password"
            })
        }

        if(role !== user.role){
            return res.status(403).json({
                success:false,
                message:"Account does not exits with current role"
            })
        }

        const payLoad = {
            userId:user._id
        }

        const token = await jwt.sign(payLoad,process.env.JWT_SECRET,{expiresIn:"1d"})

        return res.status(200).cookie("token",token,{maxAge:1*24*60*60*1000,httpOnly:true,sameSite:"strict"}).json({
            success:true,
            message:`${user.fullName} you Login Successfully`
        })


    } catch (error) {
        return res.status(500).json({
            success:false,
            message:error.message
        })
    }
}



export const logout = async(req,res) => {
    try {
        return res.status(200).clearCookie("token",{maxAge:0,httpOnly:true,sameSite:"strict"}).json({
            success:true,
            message:"Logout Successfully"
        })
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:error.message
        })
    }
}

export const updateProfile = async(req,res) => {
    try {
        const {fullName,email,phoneNumber,bio,skills} = req.body
        const resume = req.file
        const userId = req.userId 
        const updateUser = await User.findByIdAndUpdate(userId,{
            fullName,
            email,
            phoneNumber,
            "profile.bio" : bio,
            "profile.skills":skills
        },{new:true})

        return res.status(200).json({
            success:true,
            message:"Profile Updated Successfully",
            updateUser
        })

    } catch (error) {
         return res.status(500).json({
            success:false,
            message:error.message
        })
    }
}