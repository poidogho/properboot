import { User } from './user';
// import { ReadContext } from '../../utils/read-context';
// import { SortOptions } from '../../contracts/sort-options';
// import { UserQuery } from './user-query';

export interface IUserRepository {
  getUser(userId: string): Promise<User>;
  createUser(user: User): Promise<User>;
}
