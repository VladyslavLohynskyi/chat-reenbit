import { AppDispatch } from '../../store';
import { chatsSlice } from './chatsSlice';
import ChatReq from '../../../http/chat';

export const getAllUserChats =
   (userId: string) => async (dispatch: AppDispatch) => {
      dispatch(chatsSlice.actions.getChatsStart());
      const data = await ChatReq.getChats(userId);
      dispatch(chatsSlice.actions.getChats(data.chats));
   };

export const getAllUserChatsBySearchText =
   (userId: string, text: string) => async (dispatch: AppDispatch) => {
      dispatch(chatsSlice.actions.getChatsBySearchTextStart());
      const data = await ChatReq.searchChats(userId, text);
      dispatch(chatsSlice.actions.getChatsBySearchText(data.chats));
   };
