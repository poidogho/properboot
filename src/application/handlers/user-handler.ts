import { injectable } from 'inversify';
import { CreateUserRequest } from '../models/api-models/user/create-user-request';
import { UserService } from '../../domain/services/user-service';

@injectable()
export class UserHandler {
  constructor(private userService: UserService) {}

  public async handleCreateUser(
    createUserRequest: CreateUserRequest
  ): Promise<string> {
    const createdUser = await this.userService.createUser(
      createUserRequest.toDomain()
    );
    return createdUser;
  }
}
