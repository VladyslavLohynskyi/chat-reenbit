import { useAppSelector } from '../../../hooks/redux';
import './Chat.scss';
import ChatHeader from './components/ChatHeader/ChatHeader';
import Message from './components/Message/Message';

function Chat() {
   const { chat, messages, isCurrentChatLoading } = useAppSelector(
      (state) => state.currentChatReducer,
   );

   if (isCurrentChatLoading) {
      return <p>Loading...</p>;
   }
   return (
      <section className={`chat ${!chat ? 'chat__choose' : ''}`}>
         {!chat ? (
            <p>Choose the chat on aside menu</p>
         ) : (
            <>
               <ChatHeader />
               <div className='chat__main'>
                  {messages?.map((message) => <Message message={message} />)}
               </div>
            </>
         )}
      </section>
   );
}

export default Chat;
