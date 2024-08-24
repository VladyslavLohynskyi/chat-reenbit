import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IChat } from '../../../utils/interfaces';

interface IChatsState {
   chats: IChat[];
   isChatsPreloading: boolean;
}

const initialState: IChatsState = {
   chats: [],
   isChatsPreloading: true,
};

export const chatsSlice = createSlice({
   name: 'chats',
   initialState,
   reducers: {
      getChatsStart(state) {
         state.isChatsPreloading = true;
      },
      getChats(state, action: PayloadAction<IChat[]>) {
         state.isChatsPreloading = false;
         state.chats = action.payload;
      },
   },
});

export default chatsSlice.reducer;
