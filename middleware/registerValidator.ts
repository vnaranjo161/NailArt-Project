import { check, validationResult } from "express-validator";
import { NextFunction, Request, Response } from 'express';

const validatorParams = [
  check('correo').isEmail().withMessage('Debe ser un correo electrónico válido.'),
  check('contrasena').isLength({ min: 8, max: 15 }).withMessage('La contraseña debe tener entre 8 y 15 caracteres.'),
  check('nombre').isLength({ min: 1, max: 255 }).withMessage('El nombre es obligatorio y no puede exceder 255 caracteres.'),
  check('apellido').isLength({ min: 1, max: 255 }).withMessage('El apellido es obligatorio y no puede exceder 255 caracteres.'),
  check('direccion').isLength({ min: 1, max: 255 }).withMessage('La dirección es obligatoria y no puede exceder 255 caracteres.'),
  check('identificacion').isLength({ min: 1, max: 255 }).withMessage('La identificacion es obligatoria y no puede exceder 255 caracteres.'),
  check('telefono').isNumeric().isLength({ min: 10, max: 10 }).withMessage('El teléfono debe tener 10 dígitos y solo contener números.'),
];

function validator(req: Request, res: Response, next: NextFunction) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }
    next();
}

export { validatorParams, validator};
