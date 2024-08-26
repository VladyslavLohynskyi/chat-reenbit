import { useAppSelector } from '../../../../../hooks/redux';
import './Message.scss';
import { MessageType } from './MessageType';

const Message: React.FC<MessageType> = ({ message }) => {
   const { user } = useAppSelector((state) => state.userReducer);
   return (
      <div
         className={`message ${message.userId === user?._id ? 'message__right' : 'message__left'}`}
      >
         <p>{message.content}</p>
      </div>
   );
};

export default Message;
