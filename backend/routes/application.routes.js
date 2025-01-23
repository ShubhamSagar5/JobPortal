import express from 'express';
import { isAuthenticated } from '../Middleware/isAuthenticated.js';
import { applyJob, getListOfApplyJobsbyApplicant, listOfApplicants, updateStatus } from '../controllers/application.controller.js';

const router = express.Router()

router.post("/apply/:id",isAuthenticated,applyJob);
router.get("/listApplyJobs",isAuthenticated,getListOfApplyJobsbyApplicant);
router.get("/listApplicants/:id",isAuthenticated,listOfApplicants);
router.post("/statusUpdate/:id",isAuthenticated,updateStatus)

export default router