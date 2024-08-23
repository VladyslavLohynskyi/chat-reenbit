import { Request, Response } from 'express';
import userModel, { IUser } from '../models/userModel';
import UserService from '../services/userService';
import ChatService from '../services/chatService';
import chatModel from '../models/chatModel';
import { ObjectId } from 'mongodb';

interface IChatControllerCreateRequest extends Request {
   body: {
      users: [IUser, IUser];
   };
}
interface IChatSearchChatByUserRequest extends Request {
   query: {
      text: string;
      userId: string;
   };
}

class chatController {
   async create(req: IChatControllerCreateRequest, res: Response) {
      const { users } = req.body;
      const user1 = await UserService.createUser(users[0]);
      const user2 = await UserService.createUser(users[1]);
      const chat = await ChatService.createChat(
         user1._id.toString(),
         user2._id.toString(),
      );
      return res.json({
         message: 'Chat created',
         users: [user1, user2],
         chat,
      });
   }

   async delete(req: Request, res: Response) {
      const { chatId } = req.params;
      const chat = await ChatService.deleteChat(chatId);
      res.json({
         message: 'Chat deleted',
         chat,
      });
   }

   async getUserChats(req: Request, res: Response) {
      const { userId } = req.params;
      const chats = await ChatService.getChatsByUserId(userId);
      res.json({
         message: 'Chats is found',
         chats,
      });
   }

   async searchChats(req: IChatSearchChatByUserRequest, res: Response) {
      const { text, userId } = req.query;
      const chats = await ChatService.searchChats(userId, text);
      return res.json({
         message: 'Chats is found',
         chats,
      });
   }
}

export default new chatController();
