import { Router, Response } from 'express';
import User from '../models/User.model';
import { protect } from '../middlewares/access-control.middleware';

const router = Router();

router.get('/', protect, async (_, res: Response) => {
  try {
    const users = (await User.find({}, { password: 0, __v: 0 }));
    res.json(users);
  } catch (error) {
    console.error(error);
  }
});

export default router;
