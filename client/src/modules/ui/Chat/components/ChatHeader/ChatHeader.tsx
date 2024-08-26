import { useAppSelector } from '../../../../../hooks/redux';
import './ChatHeader.scss';

const ChatHeader: React.FC = () => {
   const { user } = useAppSelector((state) => state.userReducer);
   const { chat } = useAppSelector((state) => state.currentChatReducer);
   return (
      <div className='chat-header'>
         <p>
            {chat!.user1[0]._id === user?._id
               ? chat!.user2[0].name + ' ' + chat!.user2[0].surname
               : chat!.user1[0].name + ' ' + chat!.user1[0].surname}
         </p>
      </div>
   );
};

export default ChatHeader;
