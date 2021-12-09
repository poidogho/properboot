import {
  IsDate,
  IsDefined,
  IsNotEmpty,
  IsString,
  IsUUID,
  IsEnum
} from 'class-validator';
import { Notification } from '../../../../domain/aggregates/notification-aggregates/notification';
import { InterestType } from '../../../../domain/aggregates/notification-aggregates/interest-type';
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
  @IsEnum(InterestType)
  public interest: InterestType;

  @IsDefined()
  @IsNotEmpty()
  @IsDate()
  public viewingTime: Date;

  constructor(req: Request) {
    super();
    const { firstname, lastname, interest, viewingTime } = req.body;
    this.id = UUIDV4();
    this.firstname = firstname;
    this.lastname = lastname;
    this.interest = interest as InterestType;
    this.viewingTime = new Date(viewingTime);
  }

  public toDomain(): Notification {
    return new Notification({
      id: this.id,
      firstname: this.firstname,
      lastname: this.lastname,
      interest: this.interest,
      viewingTime: this.viewingTime
    });
  }
}
