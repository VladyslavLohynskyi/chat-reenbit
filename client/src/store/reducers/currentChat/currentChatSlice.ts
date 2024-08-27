import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IChat, IMessage, IUser } from '../../../utils/interfaces';

interface IUserState {
   chat: null | IChat;
   messages: null | IMessage[];
   isCurrentChatLoading: boolean;
   message: string;
}

const initialState: IUserState = {
   chat: null,
   messages: null,
   isCurrentChatLoading: false,
   message: '',
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
         state.message = action.payload.content;
      },
      clearChat(state) {
         state.chat = null;
         state.messages = null;
      },
      updateChatStart(state) {
         state.isCurrentChatLoading = true;
      },
      updateChat(state, action: PayloadAction<IUser>) {
         if (state.chat) {
            state.chat = {
               ...state.chat,
               user1:
                  state.chat.user1[0]._id === action.payload._id
                     ? [action.payload]
                     : state.chat.user1,
               user2:
                  state.chat.user2[0]._id === action.payload._id
                     ? [action.payload]
                     : state.chat.user2,
            };
         }
         state.isCurrentChatLoading = false;
      },
      clearMessage(state) {
         state.message = '';
      },
   },
});

export default currentChatSlice.reducer;
