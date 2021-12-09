import { IsBoolean, IsDefined, IsNotEmpty, IsUUID } from 'class-validator';
import { APIRequest } from '../api-request';
import { Request } from 'express';

export class UpdateHomeStatusRequest extends APIRequest {
  @IsDefined()
  @IsNotEmpty()
  @IsUUID('4')
  public homeId: string;

  @IsDefined()
  @IsBoolean()
  public approved: boolean;

  constructor(req: Request) {
    super();
    this.homeId = req.params.homeId;
    this.approved = req.body.approved;
  }
}
