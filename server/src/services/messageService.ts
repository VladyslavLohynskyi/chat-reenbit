import MessageModel from '../models/messageModel';

class MessageService {
   async createMessage(userId: string, chatId: string, content: string) {
      const message = await MessageModel.create({ userId, chatId, content });
      return message;
   }
}

export default new MessageService();
