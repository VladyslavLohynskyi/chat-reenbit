import { useAppSelector } from '../../../hooks/redux';
import './Chat.scss';
import ChatHeader from './components/ChatHeader/ChatHeader';

function Chat() {
   const { chat, isCurrentChatLoading } = useAppSelector(
      (state) => state.currentChatReducer,
   );

   if (isCurrentChatLoading) {
      return <p>Loading...</p>;
   }
   return (
      <section className={`chat ${!chat ? 'chat__choose' : ''}`}>
         {!chat ? <p>Choose the chat on aside menu</p> : <ChatHeader />}
      </section>
   );
}

export default Chat;
