import { useEffect } from 'react';
import './App.scss';
import { useAppDispatch } from './hooks/redux';
import Main from './modules/Main/Main';
import { getAllUserChats } from './store/reducers/chats/chatActionCreatores';

function App() {
   const dispatch = useAppDispatch();
   useEffect(() => {
      dispatch(getAllUserChats('66c606e525213df4f211ad29'));
   }, []);
   return (
      <div className='app'>
         <Main />
      </div>
   );
}

export default App;
