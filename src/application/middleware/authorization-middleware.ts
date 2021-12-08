import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import { UserType } from '../../domain/aggregates/user-aggregates/user-type';
import { UnauthorizedAccessException } from '../exceptions/unauthorized-access-exception';
import { ErrorCode } from '../models/error-models/error-code';
// const authorizationMiddleware = (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ): void => {
//   const token = req.header('x-auth-token');
//   if (!token) {
//     res.status(401).json({ msg: 'you do not have the right authorization' });
//   } else {
//     try {
//       const decoded = jwt.verify(token, '');
//       req.user = (decoded as any).user;
//       next();
//     } catch (error) {
//       res.status(401).json({ msg: 'invalid token' });
//     }
//   }
// };
const authorizationMiddleware = (userType: UserType) => {
  console.log(userType);
  return async (req: Request, _res: Response, next: NextFunction) => {
    try {
      const token = req.header('x-auth-token');
      if (!token) {
        throw new UnauthorizedAccessException(
          `User don't have the required privilege`,
          [ErrorCode.USER_NOT_AUTHORIZED]
        );
      } else {
        const decoded = jwt.verify(token, '');
        req.user = (decoded as any).user;
        if (req.user.role !== 'admin') {
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
