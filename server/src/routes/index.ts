import { Router } from 'express';
import { chatRouter } from './chatRouter';
export const router = Router();
router.use('/chat', chatRouter);
