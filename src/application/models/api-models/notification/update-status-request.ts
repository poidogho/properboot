import { IsDefined, IsBoolean, IsNotEmpty, IsUUID } from 'class-validator';
import { APIRequest } from '../api-request';
import { Request } from 'express';

export class UpdateStatusRequest extends APIRequest {
  @IsDefined()
  @IsNotEmpty()
  @IsUUID('4')
  public notificationId: string;

  @IsDefined()
  @IsBoolean()
  public confirmed: boolean;

  @IsDefined()
  @IsNotEmpty()
  @IsUUID('4')
  public adminId: string;

  constructor(req: Request) {
    super();
    this.notificationId = req.params.notificationId;
    this.confirmed = req.body.confirmed;
    this.adminId = req.user.id;
  }
}
