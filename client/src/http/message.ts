import { $host } from '.';
import { IBasisResponse, IMessage } from '../utils/interfaces';

interface IGetChatMessagesResponse extends IBasisResponse {
   messages: IMessage[];
}
interface ISendMessageResponse extends IBasisResponse {
   messageInfo: IMessage;
}
class MessageReq {
   getMessageByChatId = async (chatId: string) => {
      const { data } = await $host.get<IGetChatMessagesResponse>(
         '/message/' + chatId,
      );
      return data;
   };
   sendMessage = async (chatId: string, userId: string, content: string) => {
      const { data } = await $host.post<ISendMessageResponse>('/message/', {
         chatId,
         userId,
         content,
      });
      return data;
   };
}

export default new MessageReq();
