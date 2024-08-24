import { useEffect } from 'react';
import './App.scss';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import Main from './modules/Main/Main';
import { getAllUserChats } from './store/reducers/chats/chatActionCreatores';
import { getUserInfoById } from './store/reducers/user/userActionCreatores';

function App() {
   const dispatch = useAppDispatch();
   const { isChatsPreloading } = useAppSelector((state) => state.chatsReducer);
   const { isUserLoading } = useAppSelector((state) => state.userReducer);
   useEffect(() => {
      dispatch(getUserInfoById('66c606e525213df4f211ad29'));
      dispatch(getAllUserChats('66c606e525213df4f211ad29'));
   }, []);
   return (
      <div className='app'>
         {isChatsPreloading || isUserLoading ? <p>Loading...</p> : <Main />}
      </div>
   );
}

export default App;
