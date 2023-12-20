import { Request, Response, Router } from 'express';
import Skill from '../models/Skill.model';
import { protect } from '../middlewares/access-control.middleware';

const router = Router();

router.get('/', async (_, res: Response) => {
  try {
    const skills = await Skill.find({});
    res.json(skills);
  } catch (error) {
    console.error(error);
    res.status(500);
  }
});

router.post('/', protect, async (req: Request, res: Response) => {
  try {
    const { skillName, skillDescription } = req.body;

    const skillFound = await Skill.findOne({ name: skillName });

    if (skillFound) {
      res.status(400).json({ success: false, message: 'Skill already exists' });
      return;
    }

    const newSkill = new Skill({ name: skillName, description: skillDescription });
    await newSkill.save();

    res.status(201).json({ success: true, message: 'Skill created' });
  } catch (error) {
    console.error(error);
    res.status(500);
  }
});

router.patch('/', protect, async (req: Request, res: Response) => {
  try {
    const { skillId, skillName, skillDescription } = req.body;

    const skillFound = await Skill.findById(skillId);

    if (!skillFound) {
      res.status(404).json({ success: false, message: 'Skill not found' });
      return;
    }

    await skillFound.updateOne({ name: skillName, description: skillDescription });

    res.status(200).json({ success: true, message: 'Skill updated' });
  } catch (error) {
    console.error(error);
    res.status(500);
  }
});

router.get('/:id', async (req: Request, res: Response) => {
  try {
    const skillId = req.params.id;

    if (!skillId) {
      res.status(404).json({ success: true, message: 'Project Id is required' });
      return;
    }
    const skills = await Skill.findById(skillId);
    res.json(skills);
  } catch (error) {
    console.error(error);
    res.status(500);
  }
});

export default router;
