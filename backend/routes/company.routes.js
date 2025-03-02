import express from  'express';
import { isAuthenticated, isRecruiter } from '../Middleware/isAuthenticated.js';
import { getListOfCompanies, getSingleCompany, registerCompany, update } from '../controllers/company.controller.js';


const router = express.Router()

router.post("/register",isAuthenticated,isRecruiter,registerCompany);
router.get("/companyList",isAuthenticated,getListOfCompanies);
router.get("/company/:id",isAuthenticated,getSingleCompany)
router.put("/update/:id",isAuthenticated,isRecruiter,update)

export default router;
