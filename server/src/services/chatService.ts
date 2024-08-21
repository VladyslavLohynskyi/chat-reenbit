import ChatModel from '../models/chatModel';

class ChatService {
   async createChat(user1Id: string, user2Id: string) {
      if (user1Id !== user2Id) {
         const existChat = await ChatModel.findOne({
            user1: [user1Id, user2Id],
            user2: [user1Id, user2Id],
         });
         if (existChat) {
            throw new Error('Chat with this users is already exist');
         }
         const createdChat = await ChatModel.create({
            user1: user1Id,
            user2: user2Id,
         });
         return createdChat;
      }

      throw new Error('Two users are the same');
   }
   async deleteChat(id: string) {
      const chat = await ChatModel.findOneAndDelete({ _id: id });
      return chat;
   }

   async getChatsByUserId(userId: string) {
      const chats = await ChatModel.find({
         $or: [{ user1: userId }, { user2: userId }],
      });
      return chats;
   }
}

export default new ChatService();
