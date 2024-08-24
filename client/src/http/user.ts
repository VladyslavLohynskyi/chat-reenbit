import { $host } from '.';
import { IBasisResponse, IUser } from '../utils/interfaces';
interface IGetUserResponse extends IBasisResponse {
   user: IUser;
}
class UserReq {
   getUserById = async (userId: string) => {
      const { data } = await $host.get<IGetUserResponse>('/user/' + userId);
      return data;
   };
}

export default new UserReq();
