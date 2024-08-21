import MessageModel from '../models/messageModel';

class MessageService {
   async createMessage(userId: string, chatId: string, content: string) {
      const message = await MessageModel.create({ userId, chatId, content });
      return message;
   }
   async getMessagesByChatId(chatId: string) {
      const messages = await MessageModel.find({ chatId });
      return messages;
   }
}

export default new MessageService();
