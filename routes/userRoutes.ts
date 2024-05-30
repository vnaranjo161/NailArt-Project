import express from 'express';
import AuthController from '../controllers/user/authController';
import registerController from '../controllers/user/registerController'
import changePasswordController from '../controllers/user/changePasswordController'
import validateToken from '../middleware/validateToken';

const router = express.Router();

router.post('/auth', AuthController);
router.post('/register', registerController);
router.put('/changePassword', validateToken, changePasswordController)

export default router;