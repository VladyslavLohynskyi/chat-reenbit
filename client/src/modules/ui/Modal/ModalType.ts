import { ReactNode } from 'react';

export interface ModalType {
   isModalOpen: boolean;
   onClose: () => void;
   modalPosition?: string;
   onBlur?: boolean;
   children: ReactNode;
}
