import { Router } from "express";
import {
  login,
  logoutUser,
  registerUser,
} from "../controllers/auth.controller.js";
import { validate } from "../middlewares/validator.middleware.js";
import { loginValidator, userRegisterValidator } from "../validators/index.js";
import { verifyJwt } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/register").post(userRegisterValidator(), validate, registerUser);
router.route("/login").post(loginValidator(), validate, login);
router.route("/logout").post(verifyJwt, logoutUser);

export default router;
