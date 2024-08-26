import { useEffect } from 'react';
import './App.scss';

import { useAppDispatch, useAppSelector } from './hooks/redux';
import { getUserInfoById } from './store/reducers/user/userActionCreatores';
import Main from './modules/Main/Main';

function App() {
   const dispatch = useAppDispatch();
   const { isUserLoading } = useAppSelector((state) => state.userReducer);
   useEffect(() => {
      dispatch(getUserInfoById('66c606e525213df4f211ad29'));
   }, []);
   return (
      <div className='app'>{isUserLoading ? <p>Loading...</p> : <Main />}</div>
   );
}

export default App;
