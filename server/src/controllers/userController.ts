import { Request, Response } from 'express';
import UserService from '../services/userService';
import userModel from '../models/userModel';
import { ObjectId } from 'mongodb';

interface IUpdateUserInfoRequest extends Request {
   body: {
      userId: string;
      name: string;
      surname: string;
   };
}

class userController {
   async getUserInfoById(req: Request, res: Response) {
      const { userId } = req.params;
      const user = await UserService.getUserInfoById(userId);
      return res.json({
         message: 'User info is got',
         user,
      });
   }
   async updateUserInfo(req: IUpdateUserInfoRequest, res: Response) {
      const { userId, name, surname } = req.body;
      await userModel.updateOne(
         { _id: new ObjectId(userId) },
         {
            $set: { name, surname },
         },
      );
      return res.json({
         message: 'User info is updated',
      });
   }
}

export default new userController();
