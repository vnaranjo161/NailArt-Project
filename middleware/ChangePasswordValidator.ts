import { check, validationResult } from "express-validator";
import { NextFunction, Request, Response } from 'express';

const validatorParamsChangePassword = [
  check('contrasenaNueva').isLength({ min: 8, max: 15 }).withMessage('La nueva contraseña debe tener entre 8 y 15 caracteres.'),
];

function validatorChangePassword(req: Request, res: Response, next: NextFunction) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }
    next();
}

export { validatorParamsChangePassword, validatorChangePassword };
