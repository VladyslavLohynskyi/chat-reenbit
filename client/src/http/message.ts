import { $host } from '.';
import { IBasisResponse, IMessage } from '../utils/interfaces';
interface IGetChatMessagesResponse extends IBasisResponse {
   messages: IMessage[];
}
class MessageReq {
   getMessageByChatId = async (chatId: string) => {
      const { data } = await $host.get<IGetChatMessagesResponse>(
         '/message/' + chatId,
      );
      return data;
   };
}

export default new MessageReq();
