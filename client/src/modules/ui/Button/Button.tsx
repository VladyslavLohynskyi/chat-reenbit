import React from 'react';
import { ButtonPropsType } from './ButtonType';
import './Button.scss';

export const Button: React.FC<ButtonPropsType> = ({
   buttonClass,
   className,
   text,
   ...props
}) => {
   return (
      <button
         className={`button button--${buttonClass} ${className}`}
         {...props}
      >
         <span>{text}</span>
      </button>
   );
};
