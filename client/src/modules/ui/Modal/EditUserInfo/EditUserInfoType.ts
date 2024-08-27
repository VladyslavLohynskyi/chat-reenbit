import { IUser } from '../../../../utils/interfaces';

export interface EditUserInfoType {
   onClose: () => void;
   updateUser: IUser;
}
