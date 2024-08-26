import { useAppDispatch, useAppSelector } from '../../../../../hooks/redux';
import { deleteChat } from '../../../../../store/reducers/chats/chatActionCreatores';
import { clearCurrentChat } from '../../../../../store/reducers/currentChat/currentChatActionCreatores';
import { ButtonClassEnum } from '../../../../../utils/enums';
import { Button } from '../../../Button';
import './ChatHeader.scss';

const ChatHeader: React.FC = () => {
   const dispatch = useAppDispatch();
   const { user } = useAppSelector((state) => state.userReducer);
   const { chat } = useAppSelector((state) => state.currentChatReducer);
   const handleClickDeleteButton = () => {
      dispatch(deleteChat(chat!._id));
      dispatch(clearCurrentChat());
   };
   return (
      <div className='chat-header'>
         <p>
            {chat!.user1[0]._id === user?._id
               ? chat!.user2[0].name + ' ' + chat!.user2[0].surname
               : chat!.user1[0].name + ' ' + chat!.user1[0].surname}
         </p>
         <Button
            buttonClass={ButtonClassEnum.DELETE}
            text='Delete'
            onClick={handleClickDeleteButton}
         />
      </div>
   );
};

export default ChatHeader;
