import { validateResult } from "express-validator";
import { ApiError } from "../utils/api-error.js";

export const validate = (req, res, next) => {
  const errors = validateResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  const extractedErrors = [];
  errors.array().map((err) =>
    extractedErrors.push({
      [err.path]: err.msg,
    }),
  );

  throw new ApiError(422, "Recieved data is not valid"); //402 invalid data to server will reject and throw error.
};
