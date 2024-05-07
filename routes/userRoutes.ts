import express from 'express';
import AuthController from '../controllers/user/authController';
import registerController from '../controllers/user/registerController'
import changePasswordController from '../controllers/user/changePasswordController'

const router = express.Router();

router.post('/auth', AuthController);
router.post('/register', registerController);
router.put('/changePassword', changePasswordController)

export default router;