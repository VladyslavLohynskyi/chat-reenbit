import { useAppSelector } from '../../../hooks/redux';
import './Aside.scss';
import AsideChatPreview from './components/AsideChatPreview/AsideChatPreview';
import AsideHeader from './components/AsideHeader/AsideHeader';

function Aside() {
   const { isChatsLoading, chats } = useAppSelector(
      (state) => state.chatsReducer,
   );

   return (
      <aside className='aside'>
         <AsideHeader />
         {isChatsLoading ? (
            <p>Loading...</p>
         ) : (
            <div>
               {chats.map((chat) => (
                  <AsideChatPreview key={chat._id} chat={chat} />
               ))}
            </div>
         )}
      </aside>
   );
}

export default Aside;
