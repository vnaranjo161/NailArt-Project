import express from 'express';
import AuthController from '../controllers/user/authController';
import registerController from '../controllers/user/registerController'
import changePasswordController from '../controllers/user/changePasswordController'
import validateToken from '../middleware/validateToken';
import {validatorRegister, validatorParamsRegister} from "../middleware/registerValidator"
import {validatorAuth, validatorParamsAuth} from "../middleware/authValidator"
import {validatorChangePassword, validatorParamsChangePassword} from "../middleware/ChangePasswordValidator"



const router = express.Router();

router.post('/auth',validatorAuth, validatorParamsAuth, AuthController);
router.post('/register', validatorRegister, validatorParamsRegister, registerController);
router.put('/changePassword', validatorChangePassword, validatorParamsAuth, validateToken, changePasswordController)

export default router;