import { IsDefined, IsNotEmpty, IsUUID } from 'class-validator';
import { APIRequest } from '../api-request';
import { Request } from 'express';

export class UpdateAdminRequest extends APIRequest {
  @IsDefined()
  @IsNotEmpty()
  @IsUUID('4')
  public notificationId: string;

  @IsDefined()
  @IsNotEmpty()
  @IsUUID('4')
  public adminId: string;

  constructor(req: Request) {
    super();
    this.notificationId = req.params.notificationId;
    //  @ts-ignore
    this.adminId = req.user.id;
  }
}
