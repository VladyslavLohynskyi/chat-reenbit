import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../../hooks/redux';
import { ButtonClassEnum } from '../../../../../utils/enums';
import { Button } from '../../../Button';
import { Input } from '../../../Input';
import './ChatInput.scss';
import { sendMessage } from '../../../../../store/reducers/currentChat/currentChatActionCreatores';
import { getRandomText } from '../../../../../http';

const ChatInput: React.FC = () => {
   const dispatch = useAppDispatch();
   const { user } = useAppSelector((state) => state.userReducer);
   const { chat } = useAppSelector((state) => state.currentChatReducer);
   const [content, setContent] = useState<string>('');
   const handleChangeContentInput = (
      e: React.ChangeEvent<HTMLInputElement>,
   ) => {
      setContent(e.target.value);
   };
   const handleSubmitMessage = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (content.length > 0 && user && chat) {
         setContent('');
         await dispatch(sendMessage(chat._id, user._id, content));
         const randomText = await getRandomText();
         setTimeout(() => {
            dispatch(
               sendMessage(
                  chat._id,
                  user._id !== chat.user1[0]._id
                     ? chat.user1[0]._id
                     : chat.user2[0]._id,
                  randomText,
               ),
            );
         }, 3000);
      }
   };
   return (
      <form className='chat-input' onSubmit={handleSubmitMessage}>
         <Input
            value={content}
            onChange={handleChangeContentInput}
            type='text'
            placeholder='Enter a message'
         />
         <Button buttonClass={ButtonClassEnum.ADD} text='Send' />
      </form>
   );
};

export default ChatInput;
