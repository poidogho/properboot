import { IsDefined, IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { Notification } from '../../../../domain/aggregates/notification-aggregates/notification';
// import { InterestType } from '../../../../domain/aggregates/notification-aggregates/interest';
import { APIRequest } from '../api-request';
import { Request } from 'express';
import { v4 as UUIDV4 } from 'uuid';

export class CreateNotificationRequest extends APIRequest {
  @IsDefined()
  @IsUUID('4')
  public id: string;

  @IsDefined()
  @IsNotEmpty()
  @IsString()
  public firstname: string;

  @IsDefined()
  @IsNotEmpty()
  @IsString()
  public lastname: string;

  @IsDefined()
  @IsNotEmpty()
  @IsString()
  public interest: string;

  constructor(req: Request) {
    super();
    this.id = UUIDV4();
    this.firstname = req.body.firstname;
    this.lastname = req.body.lastname;
    this.interest = req.body.interest;
  }

  public toDomain(): Notification {
    return new Notification({
      id: this.id,
      firstname: this.firstname,
      lastname: this.lastname,
      interest: this.interest
    });
  }
}
