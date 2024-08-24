import { $host } from '.';
import { IBasisResponse, IChat } from '../utils/interfaces';
interface IGetChatsResponse extends IBasisResponse {
   chats: IChat[];
}
class ChatReq {
   getChats = async (userId: string) => {
      const { data } = await $host.get<IGetChatsResponse>('/chat/' + userId);
      return data;
   };

   searchChats = async (userId: string, text: string) => {
      const { data } = await $host.get<IGetChatsResponse>('/chat/', {
         params: { userId, text },
      });
      return data;
   };
}

export default new ChatReq();
