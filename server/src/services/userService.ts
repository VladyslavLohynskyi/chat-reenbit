import UserModel, { IUser } from '../models/userModel';

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
}

export default new UserService();
