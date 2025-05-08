import express from "express";
import { login, logout, register, updateProfile  } from "../controllers/user.controller.js";
import isAuthenticated from "../middleware/isAuthenticated.js";
import { validateBody } from "../middleware/validate.js";
import { registerSchema } from "../validation/userValidation.js";
import { singleload } from "../middleware/multer.js";



const router = express.Router();

router.route("/register").post(singleload, register);;
router.route("/login").post(login);
router.route("/profile/update").post(isAuthenticated,singleload, updateProfile);
router.route("/logout").get(logout);

export default router;
