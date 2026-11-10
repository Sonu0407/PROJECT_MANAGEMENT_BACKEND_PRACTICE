import Router from "express";
import { login, registerUser } from "../controllers/auth.controllers.js";
import { validate } from "../middlewares/validator.middleware.js";
import { userRegisterValidator } from "../validators/index.js";

const router = Router();

router.route("/register").post(userRegisterValidator(), validate, registerUser); //first collect the erros -> send it to validate if there it will throw errors to users or else go to next which is registerUser
router.route("/login").post(login);
export default router;
