import { useEffect, useState } from 'react';
import { Input } from '../../../Input';
import './AsideHeader.scss';
import { useAppDispatch, useAppSelector } from '../../../../../hooks/redux';
import {
   getAllUserChats,
   getAllUserChatsBySearchText,
} from '../../../../../store/reducers/chats/chatActionCreatores';
import { Button } from '../../../Button';
import { ButtonClassEnum } from '../../../../../utils/enums';
import { Modal } from '../../../Modal';
import { AddNewChat } from '../../../Modal/AddNewChat';

function AsideHeader() {
   const dispatch = useAppDispatch();
   const { user } = useAppSelector((state) => state.userReducer);
   const [text, setText] = useState<string>('');
   const [isAddNewChatModalOpened, setIsAddNewChatModalOpened] =
      useState<boolean>(false);
   const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
      setText(e.target.value);
   };

   const handleClickAddChatButton = () => {
      setIsAddNewChatModalOpened(true);
   };

   useEffect(() => {
      if (text.length > 3) {
         dispatch(getAllUserChatsBySearchText(user!._id, text));
      }
      if (text.length === 0) {
         dispatch(getAllUserChats(user!._id));
      }
   }, [text]);
   return (
      <>
         <div className='aside-header'>
            <p className='aside-header__user-name'>
               User Name:{' '}
               <span>
                  {user?.name} {user?.surname}
               </span>
            </p>
            <Input
               value={text}
               onChange={handleChangeInput}
               type='text'
               placeholder='Enter the chat name'
            />
            <Button
               buttonClass={ButtonClassEnum.ADD}
               text='Add chat'
               onClick={handleClickAddChatButton}
            />
         </div>
         <Modal
            isModalOpen={isAddNewChatModalOpened}
            onClose={() => setIsAddNewChatModalOpened(false)}
            onBlur={true}
         >
            <AddNewChat onClose={() => setIsAddNewChatModalOpened(false)} />
         </Modal>
      </>
   );
}

export default AsideHeader;
