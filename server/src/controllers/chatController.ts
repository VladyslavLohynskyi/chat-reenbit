import { Request, Response } from 'express';
import { IUser } from '../models/userModel';
import UserService from '../services/userService';
import ChatService from '../services/chatService';
import ChatModel from '../models/chatModel';

interface IChatControllerCreateRequest extends Request {
   body: {
      users: [IUser, IUser];
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
         message: 'Users created',
         users: [user1, user2],
         chat,
      });
   }
}

export default new chatController();
