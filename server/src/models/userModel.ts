import { Schema, model } from 'mongoose';
export interface IUser {
   name: string;
   surname: string;
}

const UserSchema = new Schema<IUser>({
   name: { type: String, required: true },
   surname: { type: String, required: true },
});

export default model<IUser>('User', UserSchema);
