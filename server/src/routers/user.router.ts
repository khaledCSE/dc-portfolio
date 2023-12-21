import { Router, Response } from 'express';
import User from '../models/User.model';
import { protect } from '../middlewares/access-control.middleware';
import Skill from '../models/Skill.model';
import Project from '../models/Project.model';

const router = Router();

router.get('/', protect, async (_, res: Response) => {
  try {
    const users = (await User.find({}, { password: 0, __v: 0 }));
    res.json(users);
  } catch (error) {
    console.error(error);
  }
});

router.get('/dashboard', protect, async (_, res: Response) => {
  try {
    const skills = await Skill.find({}, { __v: 0 });
    const projects = await Project.find({}, { __v: 0 });
    const users = await User.find({}, { __v: 0 });

    const payload = { skills, projects, count: { skills: skills.length, projects: projects.length, users: users.length } };
    res.json(payload);
  } catch (error) {
    console.error(error);
  }
});

export default router;
