import express from "express";
import {
  loginController,
  registerController,
} from "../controllers/authController.js";

//router object
const router = express.Router();

//register || POST method
router.post("/register", registerController);

//login || POST method
router.post("/login", loginController);

export default router;
