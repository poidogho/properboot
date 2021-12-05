import { Request, Response } from 'express';
import { controller, httpGet, httpPost } from 'inversify-express-utils';
import { StatusCodes } from 'http-status-codes';
import { inject } from 'inversify';
import { AuthenticationRequest } from '../models/api-models/auth/authentication-request';
import { AuthHandler } from '../handlers/auth-handler';

@controller('')
export class AuthController {
  constructor(
    @inject(AuthHandler)
    private authHandler: AuthHandler
  ) {}

  @httpPost('')
  public async authenticate(req: Request, res: Response) {
    const validatedReq = await new AuthenticationRequest(req).validateInput();
    const payload = this.authHandler.handleAuthenticate(validatedReq);
    res.status(StatusCodes.OK).send(payload);
  }
}
