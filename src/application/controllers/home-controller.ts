import { controller, httpPost, httpGet } from 'inversify-express-utils';
import { Request, Response } from 'express';
import { CreateHomeRequest } from '../models/api-models/home/create-home-request';
import { GetHomeRequest } from '../models/api-models/home/get-home-request';

import { HomeHandler } from '../handlers/home-handler';

@controller('/homes')
export class HomeController {
  constructor(private homeHandler: HomeHandler) {}

  @httpPost('/')
  public async createHome(req: Request, res: Response) {
    const validateReq = await new CreateHomeRequest(req).validateInput();
    const createdHome = await this.homeHandler.handleCreateHome(validateReq);
    res.status(200).json(createdHome);
  }

  @httpGet('/')
  public async getHomes(req: Request, res: Response) {
    const homes = await this.homeHandler.handleGetHomes();
    res.status(200).json(homes);
  }

  @httpGet('/:homeId')
  public async getHome(req: Request, res: Response) {
    const validateReq = await new GetHomeRequest(req).validateInput();
    const home = await this.homeHandler.handleGetHome(validateReq);
    res.status(200).json(home);
  }
}
