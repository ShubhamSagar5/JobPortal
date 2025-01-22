import express from 'express'
import { isAuthenticated } from '../Middleware/isAuthenticated.js';
import { getAllJobs, getJobById, getJobOfAdmin, register } from '../controllers/job.controller.js';

const router = express.Router();

router.post("/register",isAuthenticated,register);
router.get("/all",isAuthenticated,getAllJobs);
router.get("/single/:id",isAuthenticated,getJobById);
router.get("/admin",isAuthenticated,getJobOfAdmin);


export default router