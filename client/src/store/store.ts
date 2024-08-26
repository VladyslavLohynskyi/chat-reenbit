import { combineReducers, configureStore } from '@reduxjs/toolkit';
import chatsReducer from './reducers/chats/chatsSlice';
import userReducer from './reducers/user/userSlice';
import currentChatReducer from './reducers/currentChat/currentChatSlice';

const rootReducer = combineReducers({
   chatsReducer,
   userReducer,
   currentChatReducer,
});

export const setupStore = () => {
   return configureStore({
      reducer: rootReducer,
   });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
