import { Request, Response } from 'express';
import { IUser } from '../models/userModel';
import UserService from '../services/userService';

interface IChatControllerCreateRequest extends Request {
   body: {
      users: [IUser, IUser];
   };
}

class chatController {
   async create(req: IChatControllerCreateRequest, res: Response) {
      const { users } = req.body;
      const user1: IUser = await UserService.createUser(users[0]);
      const user2: IUser = await UserService.createUser(users[0]);
      return res.json({
         message: 'Users created',
         users: [user1, user2],
      });
   }
}

export default new chatController();
