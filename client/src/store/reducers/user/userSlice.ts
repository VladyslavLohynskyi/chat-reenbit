import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from '../../../utils/interfaces';

interface IUserState {
   user: null | IUser;
   isUserLoading: boolean;
}

const initialState: IUserState = {
   user: null,
   isUserLoading: true,
};

export const userSlice = createSlice({
   name: 'user',
   initialState,
   reducers: {
      getUserStart(state) {
         state.isUserLoading = true;
      },
      getUser(state, action: PayloadAction<IUser>) {
         state.user = action.payload;
         state.isUserLoading = false;
      },
   },
});

export default userSlice.reducer;
