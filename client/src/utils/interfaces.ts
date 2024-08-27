export interface IUser {
   _id: string;
   name: string;
   surname: string;
}

export interface IChat {
   _id: string;
   user1: IUser[];
   user2: IUser[];
}

export interface IMessage {
   _id: string;
   userId: string;
   content: string;
   chatId: string;
}

export interface IBasisResponse {
   message: string;
}
