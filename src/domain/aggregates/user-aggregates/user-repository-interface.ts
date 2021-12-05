import { User } from './user';
import { UserQuery } from './user-query';

export interface IUserRepository {
  getUser(userId: string): Promise<User>;
  getUserByAttribute(userQuery: UserQuery): Promise<User>;
  createUser(user: User): Promise<User>;
}
