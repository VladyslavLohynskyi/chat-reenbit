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

export interface IBasisResponse {
   message: string;
}
