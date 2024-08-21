import dotenv from 'dotenv';
dotenv.config();
import express, { Application, Request, Response } from 'express';
import { router } from './routes/index';
import mongoose from 'mongoose';
import cors from 'cors';
const app: Application = express();
const port: number = Number(process.env.PORT) || 8881;

app.use(express.json());
app.use(cors());
app.use('/api', router);

const start = async () => {
   try {
      await mongoose.connect(process.env.DB_URL);
      app.listen(port, () => {
         console.log(`Connected successfully on port ${port}`);
      });
   } catch (error) {
      console.log('Connecting Error');
   }
};

start();
