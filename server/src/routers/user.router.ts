import { Router, Response } from 'express';
import User from '../models/User.model';

const router = Router();

router.get('/', async (_, res: Response) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    console.error(error);
  }
});

export default router;
