import { Router } from 'express';
import { chatRouter } from './chatRouter';
import { userRouter } from './userRouter';
import { messageRouter } from './messageRouter';
export const router = Router();
router.use('/chat', chatRouter);
router.use('/user', userRouter);
router.use('/message', messageRouter);
