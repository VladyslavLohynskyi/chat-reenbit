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
}

export default new messageController();
