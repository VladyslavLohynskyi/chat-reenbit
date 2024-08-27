import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IChat } from '../../../utils/interfaces';

interface IChatsState {
   chats: IChat[];
   isChatsLoading: boolean;
}

const initialState: IChatsState = {
   chats: [],
   isChatsLoading: false,
};

export const chatsSlice = createSlice({
   name: 'chats',
   initialState,
   reducers: {
      getChatsStart(state) {
         state.isChatsLoading = true;
      },
      getChats(state, action: PayloadAction<IChat[]>) {
         state.chats = action.payload;
         state.isChatsLoading = false;
      },

      getChatsBySearchTextStart(state) {
         state.isChatsLoading = true;
      },
      getChatsBySearchText(state, action: PayloadAction<IChat[]>) {
         state.chats = action.payload;
         state.isChatsLoading = false;
      },

      addChatStart(state) {
         state.isChatsLoading = true;
      },
      addChat(state, action: PayloadAction<IChat>) {
         state.chats = [...state.chats, action.payload];
         state.isChatsLoading = false;
      },

      deleteChatStart(state) {
         state.isChatsLoading = true;
      },
      deleteChat(state, action: PayloadAction<IChat>) {
         state.chats = state.chats.filter(
            (chat) => chat._id !== action.payload._id,
         );
         state.isChatsLoading = false;
      },
   },
});

export default chatsSlice.reducer;
