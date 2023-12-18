import { Request, Response, NextFunction } from 'express';

const notFoundMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  res.status(404).json({ success: false, message: `${req.baseUrl} not found` });
};

export default notFoundMiddleware;
