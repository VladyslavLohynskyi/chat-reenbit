import React, { useState } from 'react';
import { AddNewChatType } from './AddNewChatType';
import './AddNewChat.scss';
import { Input } from '../../Input';
import { Button } from '../../Button';
import { ButtonClassEnum } from '../../../../utils/enums';
import { IUser } from '../../../../utils/interfaces';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux';
import { addNewChat } from '../../../../store/reducers/chats/chatActionCreatores';

export const AddNewChat: React.FC<AddNewChatType> = ({ onClose }) => {
   const dispatch = useAppDispatch();
   const { user } = useAppSelector((state) => state.userReducer);
   const [name, setName] = useState<string>('');
   const [surname, setSurname] = useState<string>('');
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

   const handleClickAddButton = () => {
      const user2: IUser = { name, surname, _id: Date.now() + '' };
      if (user) {
         dispatch(addNewChat([user, user2]));
      }
      onClose();
   };
   return (
      <form
         className='add-new-chat modal-container'
         onSubmit={(e) => e.preventDefault()}
      >
         <Input
            onChange={handleChangeName}
            value={name}
            type='text'
            placeholder='Enter name'
         />
         <Input
            value={surname}
            onChange={handleChangeSurname}
            type='text'
            placeholder='Enter surname'
         />
         <div className='add-new-chat__buttons-container'>
            <Button
               buttonClass={ButtonClassEnum.ADD}
               text='Add'
               onClick={handleClickAddButton}
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
