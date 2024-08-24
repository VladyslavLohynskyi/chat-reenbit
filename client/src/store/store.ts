import { combineReducers, configureStore } from '@reduxjs/toolkit';
import chatsReducer from './reducers/chats/chatsSlice';
import userReducer from './reducers/user/userSlice';

const rootReducer = combineReducers({ chatsReducer, userReducer });

export const setupStore = () => {
   return configureStore({
      reducer: rootReducer,
   });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
