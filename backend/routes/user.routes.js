import express from 'express'
import { login, logout, register, updateProfile } from '../controllers/user.controller.js';
import { isAuthenticated } from '../Middleware/isAuthenticated.js';
import { singleUpload } from '../utils/multer.js';

const router = express.Router() 

router.post("/register",singleUpload,register);
router.post("/login",login);
router.get("/logout",logout);
router.post("/update",isAuthenticated,updateProfile)



export default router