import { AppDispatch } from '../../store';
import { currentChatSlice } from './currentChatSlice';
import MessageReq from '../../../http/message';
import { IChat } from '../../../utils/interfaces';

export const getChat = (chat: IChat) => async (dispatch: AppDispatch) => {
   dispatch(currentChatSlice.actions.getChatStart());
   const data = await MessageReq.getMessageByChatId(chat._id);
   dispatch(
      currentChatSlice.actions.getChat({ chat, messages: data.messages }),
   );
};
