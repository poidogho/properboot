import { IsDefined, IsNotEmpty, IsUUID } from 'class-validator';
import { APIRequest } from '../api-request';
import { Request } from 'express';

export class DeleteNotificationRequest extends APIRequest {
  @IsDefined()
  @IsNotEmpty()
  @IsUUID('4')
  public notificationId: string;

  constructor(req: Request) {
    super();
    this.notificationId = req.params.notificationId;
  }
}
