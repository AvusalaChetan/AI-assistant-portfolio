import { NextFunction, Request, Response } from "express";
import {body, validationResult} from "express-validator";

const inputValidator = [
  body("que")
    .notEmpty()
    .withMessage("quetion should not be empty")
    .bail()
    .isString()
    .withMessage("quetion should be a string")
    .bail(),

  (req: Request, res: Response, next: NextFunction) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.status(400).json({
        message: error.array(),
      });
    }

    next();
  },
];


export {inputValidator}