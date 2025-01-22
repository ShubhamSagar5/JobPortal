import express from 'express'
import { login, logout, register, updateProfile } from '../controllers/user.controller.js';
import { isAuthenticated } from '../Middleware/isAuthenticated.js';

const router = express.Router() 

router.post("/register",register);
router.post("/login",login);
router.get("/logout",logout);
router.post("/update",isAuthenticated,updateProfile)



export default router