import { $host } from '.';
import { IBasisResponse, IChat, IUser } from '../utils/interfaces';
interface IGetChatsResponse extends IBasisResponse {
   chats: IChat[];
}
interface IAddChatResponse extends IBasisResponse {
   chat: IChat;
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
   addChat = async (users: [IUser, IUser]) => {
      const { data } = await $host.post<IAddChatResponse>('/chat/', {
         users,
      });
      return data;
   };
}

export default new ChatReq();
