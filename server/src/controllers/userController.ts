import { Request, Response } from 'express';
import UserService from '../services/userService';

class userController {
   async getUserInfoById(req: Request, res: Response) {
      const { userId } = req.params;
      const user = await UserService.getUserInfoById(userId);
      return res.json({
         message: 'User info is got',
         user,
      });
   }
}

export default new userController();
