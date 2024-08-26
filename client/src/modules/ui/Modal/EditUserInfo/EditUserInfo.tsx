import React, { useState } from 'react';
import { EditUserInfoType } from './EditUserInfoType';
import './EditUserInfo.scss';
import { Input } from '../../Input';
import { Button } from '../../Button';
import { ButtonClassEnum } from '../../../../utils/enums';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux';
import { updateUserInfoInChat } from '../../../../store/reducers/currentChat/currentChatActionCreatores';
import { getAllUserChats } from '../../../../store/reducers/chats/chatActionCreatores';

export const EditUserInfo: React.FC<EditUserInfoType> = ({
   onClose,
   updateUser,
}) => {
   const dispatch = useAppDispatch();
   const { user } = useAppSelector((state) => state.userReducer);
   const [name, setName] = useState<string>(updateUser.name);
   const [surname, setSurname] = useState<string>(updateUser.surname);
   const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
      setName(e.target.value);
   };
   const handleChangeSurname = (e: React.ChangeEvent<HTMLInputElement>) => {
      setSurname(e.target.value);
   };

   const handleClickCancelButton = (
      e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
   ) => {
      e.preventDefault();
      onClose();
   };

   const handleClickEditButton = () => {
      dispatch(updateUserInfoInChat(updateUser._id, name, surname));
      dispatch(getAllUserChats(user!._id));
      onClose();
   };
   return (
      <form
         className='edit-user-info modal-container'
         onSubmit={(e) => e.preventDefault()}
      >
         <Input
            onChange={handleChangeName}
            value={name}
            type='text'
            placeholder='Enter name'
            required={true}
         />
         <Input
            value={surname}
            onChange={handleChangeSurname}
            type='text'
            placeholder='Enter surname'
            required={true}
         />
         <div className='edit-user-info__buttons-container'>
            <Button
               buttonClass={ButtonClassEnum.EDIT}
               text='Edit'
               onClick={handleClickEditButton}
            />
            <Button
               buttonClass={ButtonClassEnum.DELETE}
               text='Cancel'
               onClick={handleClickCancelButton}
            />
         </div>
      </form>
   );
};
