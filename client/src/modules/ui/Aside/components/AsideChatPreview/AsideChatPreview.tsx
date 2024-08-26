import { useAppSelector } from '../../../../../hooks/redux';
import './AsideChatPreview.scss';
import { IAsideChatPreviewType } from './AsideChatPreviewType';

const AsideChatPreview: React.FC<IAsideChatPreviewType> = ({ chat }) => {
   const { user } = useAppSelector((state) => state.userReducer);
   return (
      <div className='aside-chat-preview'>
         <p>
            {chat.user1[0]._id === user?._id
               ? chat.user2[0].name + ' ' + chat.user2[0].surname
               : chat.user1[0].name + ' ' + chat.user1[0].surname}
         </p>
      </div>
   );
};

export default AsideChatPreview;
