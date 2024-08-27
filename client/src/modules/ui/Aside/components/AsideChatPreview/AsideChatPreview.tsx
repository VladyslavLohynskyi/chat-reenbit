import { useAppDispatch, useAppSelector } from '../../../../../hooks/redux';
import { getChat } from '../../../../../store/reducers/currentChat/currentChatActionCreatores';
import './AsideChatPreview.scss';
import { IAsideChatPreviewType } from './AsideChatPreviewType';

const AsideChatPreview: React.FC<IAsideChatPreviewType> = ({ chat }) => {
   const dispatch = useAppDispatch();
   const { user } = useAppSelector((state) => state.userReducer);
   const handleClickChatPreview = () => {
      dispatch(getChat(chat));
   };
   return (
      <div className='aside-chat-preview' onClick={handleClickChatPreview}>
         <p>
            {chat.user1[0]._id === user?._id
               ? chat.user2[0].name + ' ' + chat.user2[0].surname
               : chat.user1[0].name + ' ' + chat.user1[0].surname}
         </p>
      </div>
   );
};

export default AsideChatPreview;
