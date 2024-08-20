import dotenv from 'dotenv';
dotenv.config();
import express, { Application, Request, Response } from 'express';
const app: Application = express();
const port: number = Number(process.env.PORT) || 8881;

app.use(express.json());
app.get('/', (req: Request, res: Response) => {
   res.send('Welcome to Express & TypeScript Server');
});

const start = async () => {
   try {
      app.listen(port, () => {
         console.log(`Connected successfully on port ${port}`);
      });
   } catch (error) {
      console.log('Connecting Error');
   }
};

start();
