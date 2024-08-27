import { Schema, model } from 'mongoose';
export interface IMessage {
   userId: {
      type: typeof Schema.Types.ObjectId;
      ref: string;
   };
   chatId: {
      type: typeof Schema.Types.ObjectId;
      ref: string;
   };
   content: string;
}

const MessageSchema = new Schema<IMessage>({
   userId: { type: Schema.Types.ObjectId, ref: 'User' },
   chatId: { type: Schema.Types.ObjectId, ref: 'Chat' },
   content: { type: String, required: true },
});

export default model<IMessage>('Message', MessageSchema);
