import { Schema, model } from 'mongoose';
export interface IChat {
   user1: {
      type: typeof Schema.Types.ObjectId;
      ref: string;
   };
   user2: {
      type: typeof Schema.Types.ObjectId;
      ref: string;
   };
}

const ChatSchema = new Schema<IChat>({
   user1: { type: Schema.Types.ObjectId, ref: 'User' },
   user2: { type: Schema.Types.ObjectId, ref: 'User' },
});

export default model<IChat>('Chat', ChatSchema);
