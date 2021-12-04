import { User } from '../aggregates/user-aggregates/user';
export class UserService {
  constructor() {}

  public async createUser(user: User) {
    return user;
  }
}
