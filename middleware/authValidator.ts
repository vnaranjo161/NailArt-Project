import { check, validationResult } from "express-validator";
import { NextFunction, Request, Response } from 'express';

const validatorParamsAuth = [
  check('correo').isEmail().withMessage('Debe ser un correo electrónico válido.'),
];

function validatorAuth(req: Request, res: Response, next: NextFunction) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }
    next();
}

export { validatorParamsAuth, validatorAuth };
