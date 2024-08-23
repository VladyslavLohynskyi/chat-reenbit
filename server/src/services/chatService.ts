import { ObjectId } from 'mongodb';
import ChatModel from '../models/chatModel';
import UserModel from '../models/userModel';

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
      const chats = await ChatModel.aggregate([
         {
            $match: {
               $or: [
                  { user1: new ObjectId(userId) },
                  { user2: new ObjectId(userId) },
               ],
            },
         },
         {
            $lookup: {
               from: 'users',
               localField: 'user1',
               foreignField: '_id',
               as: 'user1',
            },
         },
         {
            $lookup: {
               from: 'users',
               localField: 'user2',
               foreignField: '_id',
               as: 'user2',
            },
         },
      ]);
      return chats;
   }

   async searchChats(userId: string, text: string) {
      const users = await UserModel.find({
         $text: { $search: text },
      });

      let chats: {}[] = [];
      for (let i = 0; i < users.length; i++) {
         const chat = await ChatModel.aggregate([
            {
               $match: {
                  $and: [
                     {
                        $or: [
                           { user1: new ObjectId(userId) },
                           { user2: new ObjectId(userId) },
                        ],
                     },
                     {
                        $or: [{ user1: users[i]._id }, { user2: users[i]._id }],
                     },
                  ],
               },
            },
            {
               $lookup: {
                  from: 'users',
                  localField: 'user1',
                  foreignField: '_id',
                  as: 'user1',
               },
            },
            {
               $lookup: {
                  from: 'users',
                  localField: 'user2',
                  foreignField: '_id',
                  as: 'user2',
               },
            },
         ]);
         chats = [...chats, ...chat];
      }
      return chats;
   }
}

export default new ChatService();
