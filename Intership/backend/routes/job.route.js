import express from "express"
import {postJob, getAllJobs, getJobById, getAdminJobs} from "../controllers/job.controller.js"
import isAuthenticated from "../middleware/isAuthenticated.js";
import checkRole from "../middleware/checkRole.js";
const router = express.Router();

router.route("/postjob").post(isAuthenticated, checkRole("recruiter"), postJob);
router.route("/getalljob").get(isAuthenticated, getAllJobs);
router.route("/getjob/:id").get(isAuthenticated, getJobById);
router.route("/getadminjob").get(isAuthenticated, checkRole("recruiter"), getAdminJobs);
    
export default router