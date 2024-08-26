import { Router } from 'express';
import userController from '../controllers/userController';

export const userRouter = Router();

userRouter.get('/:userId', userController.getUserInfoById);
userRouter.put('/', userController.updateUserInfo);
