import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../../hooks/redux';
import { deleteChat } from '../../../../../store/reducers/chats/chatActionCreatores';
import { clearCurrentChat } from '../../../../../store/reducers/currentChat/currentChatActionCreatores';
import { ButtonClassEnum } from '../../../../../utils/enums';
import { Button } from '../../../Button';
import './ChatHeader.scss';
import { Modal } from '../../../Modal';
import { EditUserInfo } from '../../../Modal/EditUserInfo/EditUserInfo';

const ChatHeader: React.FC = () => {
   const dispatch = useAppDispatch();
   const { user } = useAppSelector((state) => state.userReducer);
   const { chat } = useAppSelector((state) => state.currentChatReducer);
   const [isEditModalOpened, setIsEditModalOpened] = useState<boolean>(false);
   const handleClickDeleteButton = () => {
      dispatch(deleteChat(chat!._id));
      dispatch(clearCurrentChat());
   };
   const handleClickEditButton = () => {
      setIsEditModalOpened(true);
   };
   return (
      <>
         <div className='chat-header'>
            <p>
               {chat!.user1[0]._id === user?._id
                  ? chat!.user2[0].name + ' ' + chat!.user2[0].surname
                  : chat!.user1[0].name + ' ' + chat!.user1[0].surname}
            </p>

            <div className='chat-header__buttons-container'>
               <Button
                  buttonClass={ButtonClassEnum.EDIT}
                  text='Edit'
                  onClick={handleClickEditButton}
               />
               <Button
                  buttonClass={ButtonClassEnum.DELETE}
                  text='Delete'
                  onClick={handleClickDeleteButton}
               />
            </div>
         </div>
         <Modal
            isModalOpen={isEditModalOpened}
            onClose={() => setIsEditModalOpened(false)}
            onBlur={true}
         >
            <EditUserInfo
               onClose={() => setIsEditModalOpened(false)}
               updateUser={
                  chat!.user1[0]._id === user!._id
                     ? chat!.user2[0]
                     : chat!.user1[0]
               }
            />
         </Modal>
      </>
   );
};

export default ChatHeader;
