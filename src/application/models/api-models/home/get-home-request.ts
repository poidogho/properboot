import { IsDefined, IsUUID } from 'class-validator';
import { APIRequest } from '../api-request';
import { Request } from 'express';

export class GetHomeRequest extends APIRequest {
  @IsDefined()
  @IsUUID()
  public homeId: string;

  constructor(req: Request) {
    super();
    this.homeId = req.params.homeId;
  }
}
