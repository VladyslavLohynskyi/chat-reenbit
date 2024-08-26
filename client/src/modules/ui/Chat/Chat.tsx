import { useAppSelector } from '../../../hooks/redux';
import './Chat.scss';
import ChatHeader from './components/ChatHeader/ChatHeader';
import ChatInput from './components/ChatInput/ChatInput';
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
                  {messages?.map((message) => (
                     <Message key={message._id} message={message} />
                  ))}
               </div>
               <ChatInput />
            </>
         )}
      </section>
   );
}

export default Chat;
