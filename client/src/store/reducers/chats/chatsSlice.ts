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
         state.isChatsLoading = false;
         state.chats = action.payload;
      },

      getChatsBySearchTextStart(state) {
         state.isChatsLoading = true;
      },
      getChatsBySearchText(state, action: PayloadAction<IChat[]>) {
         state.isChatsLoading = false;
         state.chats = action.payload;
      },
   },
});

export default chatsSlice.reducer;
