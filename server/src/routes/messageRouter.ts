import { Router } from 'express';
import messageController from '../controllers/messageController';

export const messageRouter = Router();
messageRouter.post('/', messageController.create);
messageRouter.get('/:chatId', messageController.getChatMessages);
