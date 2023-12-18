import { NextFunction, Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';

export const protect = async (req: Request, res: Response, next: NextFunction) => {
  const header = req.headers.authorization;

  if (!header) {
    res.status(401).json({ success: false, message: 'Access Denied' });
  }

  // eslint-disable-next-line no-unsafe-optional-chaining
  const token = ((header as string).split(' '))[1];
  const secret = String(process.env.API_SECRET);
  const decoded = await jwt.verify(token, secret);

  if (!decoded) {
    res.status(401).json({ success: false, message: 'Access Denied' });
  }

  req.body.apiUser = decoded;
  next();
};
