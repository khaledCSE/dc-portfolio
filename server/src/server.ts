import express from 'express';
import cors from 'cors';
import { config as dotenv } from 'dotenv';
import { connectDB } from './config/db.config';
import User from './models/User.model';
import notFoundMiddleware from './middlewares/not-found.middleware';

dotenv();

const app = express();

// eslint-disable-next-line @typescript-eslint/no-floating-promises
connectDB();

app.use(express.json());
app.use(cors());

// * Routes
app.get('/', async (_, res) => {
  const users = await User.find();
  res.json({ success: true, message: 'Hi There!', users: users.length });
});

app.use('*', notFoundMiddleware);

const port = process.env.PORT ?? 5000;
// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Server listening to port --> ${port}`));
