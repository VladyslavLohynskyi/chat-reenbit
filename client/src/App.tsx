import { useEffect, useState } from 'react';
import './App.scss';

import { useAppDispatch, useAppSelector } from './hooks/redux';
import { getUserInfoById } from './store/reducers/user/userActionCreatores';
import Main from './modules/Main/Main';
import Alert from './modules/ui/Alert/Alert';
import { clearMessage } from './store/reducers/currentChat/currentChatActionCreatores';

function App() {
   const dispatch = useAppDispatch();
   const { isUserLoading } = useAppSelector((state) => state.userReducer);
   const { message } = useAppSelector((state) => state.currentChatReducer);
   const [showAlertNotification, setShowAlertNotification] =
      useState<boolean>(false);
   useEffect(() => {
      dispatch(getUserInfoById('66c606e525213df4f211ad29'));
   }, []);

   useEffect(() => {
      if (message.length > 0) {
         setShowAlertNotification(true);
      }
   }, [message]);

   return (
      <div className='app'>
         {isUserLoading ? (
            <p>Loading...</p>
         ) : (
            <>
               <Main />
               <Alert
                  show={showAlertNotification}
                  onClose={() => {
                     setShowAlertNotification(false);
                     dispatch(clearMessage());
                  }}
                  message={message}
               />
            </>
         )}
      </div>
   );
}

export default App;
