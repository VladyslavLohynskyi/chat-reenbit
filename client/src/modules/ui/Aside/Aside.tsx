import { useAppSelector } from '../../../hooks/redux';
import './Aside.scss';
import AsideChatPreview from './components/AsideChatPreview/AsideChatPreview';
import AsideHeader from './components/AsideHeader/AsideHeader';

function Aside() {
   const { chats } = useAppSelector((state) => state.chatsReducer);
   return (
      <div className='aside'>
         <AsideHeader />
         <div>
            {chats.map((chat) => (
               <AsideChatPreview key={chat._id} chat={chat} />
            ))}
         </div>
      </div>
   );
}

export default Aside;
