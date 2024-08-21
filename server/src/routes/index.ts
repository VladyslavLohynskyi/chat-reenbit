import { Router } from 'express';
import { chatRouter } from './chatRouter';
import { userRouter } from './userRouter';
export const router = Router();
router.use('/chat', chatRouter);
router.use('/user', userRouter);
