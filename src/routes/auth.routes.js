import Router from "express";
import {
  login,
  logoutUser,
  registerUser,
} from "../controllers/auth.controllers.js";
import { validate } from "../middlewares/validator.middleware.js";
import {
  userLoginValidator,
  userRegisterValidator,
} from "../validators/index.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/register").post(userRegisterValidator(), validate, registerUser); //first collect the erros -> send it to validate if there it will throw errors to users or else go to next which is registerUser
router.route("/login").post(userLoginValidator(), validate, login);

//protected routes
router.route("/logout").post(verifyJWT, logoutUser);

export default router;
