import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import { UserRole } from '../../domain/aggregates/user-aggregates/user-role';
import { UnauthorizedAccessException } from '../exceptions/unauthorized-access-exception';
import { ErrorCode } from '../models/error-models/error-code';
import { config } from '../../config/config';

const authorizationMiddleware = (userPrivilege: UserRole) => {
  return async (req: Request, _res: Response, next: NextFunction) => {
    try {
      const token = req.header('x-auth-token');
      if (!token) {
        throw new UnauthorizedAccessException(
          `User don't have the required privilege`,
          [ErrorCode.USER_NOT_AUTHORIZED]
        );
      } else {
        const decoded = jwt.verify(token, config.jwtSecret);
        req.user = (decoded as any).user;
        if (req.user.role !== userPrivilege) {
          throw new UnauthorizedAccessException(
            `User don't have the required privilege`,
            [ErrorCode.USER_NOT_AUTHORIZED]
          );
        }
        next();
      }
    } catch (error) {
      next(error);
    }
  };
};
export { authorizationMiddleware as AuthorizationMiddleware };
