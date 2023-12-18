import { Application } from 'express';
import userRouter from './user.router';
import authRouter from './auth.router';

export default function useRouters(app: Application) {
  app.use('/api/users', userRouter);
  app.use('/api/auth', authRouter);
}
