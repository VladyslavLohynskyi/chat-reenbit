import { useState } from 'react';
import { Input } from '../../../Input';
import './AsideHeader.scss';

function AsideHeader() {
   const [text, setText] = useState<string>('');
   const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
      setText(e.target.value);
   };
   return (
      <div className='aside-header'>
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
