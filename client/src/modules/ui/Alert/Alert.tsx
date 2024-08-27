import './Alert.scss';
import React from 'react';
import { AlertType } from './AlertType';

const Alert: React.FC<AlertType> = ({ show, onClose, message }) => {
   if (!show) {
      return null;
   }

   const timer = setTimeout(() => onClose(), 3000);
   function startTimer() {
      if (show) {
         return timer;
      }
   }
   startTimer();

   return (
      <div className='modal-alert__container' onClick={() => onClose()}>
         <div
            className={`modal-alert__content`}
            onClick={(e) => {
               e.stopPropagation();
               clearTimeout(timer);
            }}
         >
            <p>{message}</p>
         </div>
      </div>
   );
};

export default Alert;
