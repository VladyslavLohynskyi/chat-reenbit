import { useState } from 'react';
import { Input } from '../../../Input';
import './AsideHeader.scss';
import { useAppSelector } from '../../../../../hooks/redux';

function AsideHeader() {
   const { user } = useAppSelector((state) => state.userReducer);
   const [text, setText] = useState<string>('');
   const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
      setText(e.target.value);
   };
   return (
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
      </div>
   );
}

export default AsideHeader;
