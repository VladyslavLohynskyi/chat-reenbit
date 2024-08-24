import { AppDispatch } from '../../store';
import { userSlice } from './userSlice';
import UserReq from '../../../http/user';

export const getUserInfoById =
   (userId: string) => async (dispatch: AppDispatch) => {
      dispatch(userSlice.actions.getUserStart());
      const data = await UserReq.getUserById(userId);
      dispatch(userSlice.actions.getUser(data.user));
   };
