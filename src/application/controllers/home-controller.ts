import {
  controller,
  httpPost,
  httpGet,
  httpPut
} from 'inversify-express-utils';
import { Request, Response } from 'express';
import { CreateHomeRequest } from '../models/api-models/home/create-home-request';
import { GetHomeRequest } from '../models/api-models/home/get-home-request';
import { UpdateHomeStatusRequest } from '../models/api-models/home/update-home-status-request';
import { AuthorizationMiddleware } from '../middleware/authorization-middleware';
import { UserRole } from '../../domain/aggregates/user-aggregates/user-role';
import { HomeHandler } from '../handlers/home-handler';

@controller('/homes')
export class HomeController {
  constructor(private homeHandler: HomeHandler) {}

  @httpPost('/', AuthorizationMiddleware(UserRole.USER))
  public async createHome(req: Request, res: Response) {
    const validateReq = await new CreateHomeRequest(req).validateInput();
    const createdHome = await this.homeHandler.handleCreateHome(validateReq);
    res.status(200).json(createdHome);
  }

  @httpGet('/')
  public async getHomes(_req: Request, res: Response) {
    const homes = await this.homeHandler.handleGetHomes();
    res.status(200).json(homes);
  }

  @httpGet('/:homeId')
  public async getHome(req: Request, res: Response) {
    const validateReq = await new GetHomeRequest(req).validateInput();
    const home = await this.homeHandler.handleGetHome(validateReq);
    res.status(200).json(home);
  }

  @httpPut('/:homeId', AuthorizationMiddleware(UserRole.ADMIN))
  public async updateHomeStatus(req: Request, res: Response) {
    const validateReq = await new UpdateHomeStatusRequest(req).validateInput();
    await this.homeHandler.handleUpdateHomeStatus(validateReq);
    res.status(200).json({ msg: 'status succesfully updated' });
  }
}
