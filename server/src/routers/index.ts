import { Application } from 'express';
import userRouter from './user.router';
import authRouter from './auth.router';
import skillsRouter from './skills.router';
import projectsRouter from './projects.router';

export default function useRouters(app: Application) {
  app.use('/api/users', userRouter);
  app.use('/api/auth', authRouter);
  app.use('/api/skills', skillsRouter);
  app.use('/api/projects', projectsRouter);
}
