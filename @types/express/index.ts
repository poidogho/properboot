import { User } from '../../src/domain/aggregates/user-aggregates/user';

declare global {
  namespace Express {
    interface Request {
      user?: User;
    }
  }
}
