import express from 'express';
import AuthController from '../controllers/user/authController';
import registerController from '../controllers/user/registerController'
import changePasswordController from '../controllers/user/changePasswordController'
import validateToken from '../middleware/validateToken';
import {validator, validatorParams} from "../middleware/registerValidator"



const router = express.Router();

router.post('/auth', AuthController);
router.post('/register', validatorParams, validator, registerController);
router.put('/changePassword', validateToken, changePasswordController)

export default router;