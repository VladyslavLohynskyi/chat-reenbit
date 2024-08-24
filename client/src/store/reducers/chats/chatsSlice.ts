import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IChat } from '../../../utils/interfaces';

interface IChatsState {
   chats: IChat[];
}

const initialState: IChatsState = {
   chats: [],
};

export const chatsSlice = createSlice({
   name: 'chats',
   initialState,
   reducers: {
      getChats(state, action: PayloadAction<IChat[]>) {
         state.chats = action.payload;
      },
   },
});

export default chatsSlice.reducer;
