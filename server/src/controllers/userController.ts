import { Request, Response } from 'express';
import { IUser } from '../models/userModel';
import UserService from '../services/userService';
import ChatService from '../services/chatService';

class userController {
   async getUserInfoById(req: Request, res: Response) {
      const { userId } = req.params;
      const user = await UserService.getUserInfoById(userId);
      return res.json({
         message: 'Chat created',
         user,
      });
   }
}

export default new userController();
