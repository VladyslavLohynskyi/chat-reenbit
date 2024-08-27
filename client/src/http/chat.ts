import { $host } from '.';
import { IBasisResponse, IChat, IUser } from '../utils/interfaces';
interface IGetChatsResponse extends IBasisResponse {
   chats: IChat[];
}
interface IAddChatResponse extends IBasisResponse {
   chat: IChat;
}

interface IDeleteChatResponse extends IBasisResponse {
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

   deleteChat = async (chatId: string) => {
      const { data } = await $host.delete<IDeleteChatResponse>(
         '/chat/' + chatId,
      );
      return data;
   };
}

export default new ChatReq();
