import { Router } from 'express';
import chatController from '../controllers/chatController';

export const chatRouter = Router();
chatRouter.post('/', chatController.create);
chatRouter.delete('/:chatId', chatController.delete);
chatRouter.get('/:userId', chatController.getUserChats);
chatRouter.get('/', chatController.searchChats);
