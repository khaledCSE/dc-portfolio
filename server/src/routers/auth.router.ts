import { Request, Response, Router } from 'express';
import bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import User from '../models/User.model';
import { protect } from '../middlewares/access-control.middleware';

const authRouter = Router();

authRouter.post('/signup', async (req: Request, res: Response) => {
  try {
    const {
      firstName, lastName, email, password,
    } = req.body;
    const userFound = await User.findOne({ email });

    if (userFound) {
      res.status(400).json({ success: false, message: 'User exists' });
    }

    const hashed = await bcrypt.hash(password, 10);
    const user = new User({
      firstName, lastName, email, password: hashed,
    });
    const saved = await user.save();

    const secret = String(process.env.API_SECRET);
    const token = await jwt.sign({ firstName, lastName, email }, secret);

    res.json({ token });
  } catch (err) {
    console.error(err);
    res.status(500);
  }
});

authRouter.post('/login', async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const userFound = await User.findOne({ email });

    if (!userFound) {
      res.status(404).json({ success: false, message: 'User not found' });
    }

    const matchedPassword = await bcrypt.compare(password, String(userFound?.password));

    if (!matchedPassword) {
      res.status(400).json({ success: false, message: 'Invalid  credentials' });
    }

    const payload = {
      _id: userFound?._id, firstName: userFound?.firstName, lastName: userFound?.lastName, email: userFound?.email,
    };

    const secret = String(process.env.API_SECRET);
    const token = await jwt.sign(payload, secret);

    res.json({ token });
  } catch (err) {
    console.error(err);
    res.status(500);
  }
});

authRouter.get('/me', protect, async (req: Request, res: Response) => {
  const { apiUser } = req.body;
  res.json(apiUser);
});

export default authRouter;
