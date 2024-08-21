import { Request, Response } from 'express';
import MessageService from '../services/messageService';

interface IMessageControllerRequest extends Request {
   body: {
      userId: string;
      chatId: string;
      content: string;
   };
}

class messageController {
   async create(req: IMessageControllerRequest, res: Response) {
      const { userId, chatId, content } = req.body;
      const messageInfo = await MessageService.createMessage(
         userId,
         chatId,
         content,
      );
      return res.json({
         message: 'Message created',
         messageInfo,
      });
   }
   async getChatMessages(req: Request, res: Response) {
      const { chatId } = req.params;
      const messages = await MessageService.getMessagesByChatId(chatId);
      return res.json({
         message: 'Messages is found',
         messages,
      });
   }
}

export default new messageController();
