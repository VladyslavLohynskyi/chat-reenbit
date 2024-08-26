import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IChat, IMessage } from '../../../utils/interfaces';

interface IUserState {
   chat: null | IChat;
   messages: null | IMessage[];
   isCurrentChatLoading: boolean;
}

const initialState: IUserState = {
   chat: null,
   messages: null,
   isCurrentChatLoading: false,
};

export const currentChatSlice = createSlice({
   name: 'current_chat',
   initialState,
   reducers: {
      getChatStart(state) {
         state.isCurrentChatLoading = true;
      },
      getChat(
         state,
         action: PayloadAction<{ chat: IChat; messages: IMessage[] }>,
      ) {
         state.chat = action.payload.chat;
         state.messages = action.payload.messages;
         state.isCurrentChatLoading = false;
      },
      sendMessage(state, action: PayloadAction<IMessage>) {
         state.messages = [...(state.messages || []), action.payload];
      },
   },
});

export default currentChatSlice.reducer;
