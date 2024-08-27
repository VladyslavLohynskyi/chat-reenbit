import { ButtonClassEnum } from '../../../utils/enums';

export interface ButtonPropsType
   extends React.HTMLAttributes<HTMLButtonElement> {
   buttonClass: ButtonClassEnum;
   text: string;
}
