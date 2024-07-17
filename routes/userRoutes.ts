import express from 'express';
import AuthController from '../controllers/user/authController';
import registerController from '../controllers/user/registerController'
import changePasswordController from '../controllers/user/changePasswordController'
import validateToken from '../middleware/validateToken';
import prueba from '../controllers/prueba';
import {validator, validatorParams} from "../middleware/registerValidator"



const router = express.Router();

router.post('/auth', AuthController);
router.post('/register', validatorParams, validator, registerController);
router.put('/changePassword', validateToken, changePasswordController);
router.get('/prueba', prueba);

export default router;