import { combineReducers, configureStore } from '@reduxjs/toolkit';
import chatsReducer from './reducers/chats/chatsSlice';

const rootReducer = combineReducers({ chatsReducer });

export const setupStore = () => {
   return configureStore({
      reducer: rootReducer,
   });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
