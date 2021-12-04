import { inject, injectable } from 'inversify';
import { CreateUserRequest } from '../models/api-models/user/create-user-request';
import { CreateUserResponse } from '../models/api-models/user/create-user-response';
import { UserService } from '../../domain/services/user-service';

@injectable()
export class UserHandler {
  constructor(private userService: UserService) {}

  public async handleCreateUser(
    createUserRequest: CreateUserRequest
  ): Promise<CreateUserResponse> {
    const createdUser = await this.userService.createUser(
      createUserRequest.toDomain()
    );
    return CreateUserResponse.fromDomain(createdUser);
  }
}
