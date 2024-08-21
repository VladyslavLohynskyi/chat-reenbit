import { Request, Response } from 'express';
import { IUser } from '../models/userModel';
import UserService from '../services/userService';
import ChatService from '../services/chatService';

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
         message: 'Chat created',
         users: [user1, user2],
         chat,
      });
   }

   async delete(req: Request, res: Response) {
      const { id } = req.params;
      const chat = await ChatService.deleteChat(id);
      res.json({
         message: 'Chat deleted',
         chat,
      });
   }
}

export default new chatController();
