import UserModel, { IUser } from '../models/userModel';
import { ObjectId } from 'mongodb';

class UserService {
   async createUser({ name, surname }: IUser) {
      const existUser = await UserModel.findOne({ name, surname });
      if (existUser) {
         return existUser;
      } else {
         const createdUser = await UserModel.create({ name, surname });
         return createdUser;
      }
   }
   async getUserInfoById(userId: string) {
      const user = await UserModel.findById(userId);
      return user;
   }

   async updateUserInfo(userId: string, name: string, surname: string) {
      const user = await UserModel.updateOne(
         { _id: new ObjectId(userId) },
         {
            $set: { name, surname },
         },
      );
      return user;
   }
}

export default new UserService();
