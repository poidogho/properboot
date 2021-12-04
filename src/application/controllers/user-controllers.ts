import { controller, httpPost } from 'inversify-express-utils';
import { Request, Response } from 'express';
import { CreateUserRequest } from '../models/api-models/user/create-user-request';

import { UserHandler } from '../handlers/user-handler';

@controller('/users')
export class UserController {
  constructor(private userHandler: UserHandler) {}

  @httpPost('/')
  public async createUser(req: Request, res: Response) {
    const validateReq = await new CreateUserRequest(req).validateInput();
    const createdUser = await this.userHandler.handleCreateUser(validateReq);
    res.status(200).json(createdUser);
  }
}
