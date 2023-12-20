import { Router, Response, Request } from 'express';
import Project from '../models/Project.model';
import { protect } from '../middlewares/access-control.middleware';

const router = Router();

router.get('/', async (_, res: Response) => {
  try {
    const projects = await Project.find({}).populate('skills');
    res.json(projects);
  } catch (error) {
    console.error(error);
    res.status(500);
  }
});

router.post('/', protect, async (req: Request, res: Response) => {
  try {
    const {
      projectName, projectDescription, skills, techStack,
    } = req.body;

    const newProject = new Project({
      name: projectName, description: projectDescription, skills, techStack,
    });
    await newProject.save();
    res.status(201).json({ success: true, message: 'Project created' });
  } catch (error) {
    console.error(error);
    res.status(500);
  }
});

router.patch('/', protect, async (req: Request, res: Response) => {
  try {
    const {
      projectId, projectName, projectDescription, skills, techStack,
    } = req.body;

    const projectFound = await Project.findById(projectId);

    if (!projectFound) {
      res.status(404).json({ success: true, message: 'Project not found' });
      return;
    }

    await Project.updateOne({ _id: projectId }, {
      name: projectName, description: projectDescription, skills, techStack,
    });

    res.status(201).json({ success: true, message: 'Project updated' });
  } catch (error) {
    console.error(error);
    res.status(500);
  }
});

router.get('/:id', async (req: Request, res: Response) => {
  try {
    const projectId = req.params.id;

    if (!projectId) {
      res.status(404).json({ success: true, message: 'Project Id is required' });
      return;
    }
    const projects = await Project.findById(projectId).populate('skills');
    res.json(projects);
  } catch (error) {
    console.error(error);
    res.status(500);
  }
});

router.delete('/:id', protect, async (req: Request, res: Response) => {
  try {
    const projectId = req.params.id;

    if (!projectId) {
      res.status(404).json({ success: true, message: 'Project Id is required' });
      return;
    }

    const projectFound = await Project.findById(projectId);

    if (!projectFound) {
      res.status(404).json({ success: true, message: 'Project not found' });
      return;
    }

    await Project.findByIdAndDelete(projectId);

    res.status(201).json({ success: true, message: 'Project Deleted' });
  } catch (error) {
    console.error(error);
    res.status(500);
  }
});

export default router;
