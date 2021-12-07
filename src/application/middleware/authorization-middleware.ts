import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

const authorizationMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const token = req.header('x-auth-token');
  if (!token) {
    res.status(401).json({ msg: 'you do not have the right authorization' });
  } else {
    try {
      const decoded = jwt.verify(token, '');
      req.user = (decoded as any).user;
      next();
    } catch (error) {
      res.status(401).json({ msg: 'invalid token' });
    }
  }
};

export { authorizationMiddleware as AuthorizationMiddleware };
