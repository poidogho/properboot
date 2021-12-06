import {
  IsDefined,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsEmail,
  IsEnum,
  IsUUID
} from 'class-validator';
import { User } from '../../../../domain/aggregates/user-aggregates/user';
import { APIRequest } from '../api-request';
import { UserRoles } from '../../../../domain/aggregates/user-aggregates/user-privilege';
import { Request } from 'express';
import { v4 as UUIDV4 } from 'uuid';

export class CreateUserRequest extends APIRequest {
  @IsDefined()
  @IsUUID('4')
  public id: string;

  @IsDefined()
  @IsNotEmpty()
  @IsString()
  public firstname: string;

  @IsOptional()
  public othernames: string;

  @IsDefined()
  @IsNotEmpty()
  @IsString()
  public lastname: string;

  @IsDefined()
  @IsNotEmpty()
  @IsEmail()
  public email: string;

  @IsDefined()
  @IsNotEmpty()
  @IsString()
  public password: string;

  @IsDefined()
  @IsEnum(UserRoles)
  role: UserRoles;

  constructor(req: Request) {
    super();
    this.id = UUIDV4();
    this.firstname = req.body.firstname;
    this.lastname = req.body.lastname;
    this.othernames = req.body.othernames;
    this.email = req.body.email;
    this.password = req.body.password;
    this.role = req.body.role as UserRoles;
  }

  public toDomain(): User {
    return new User({
      id: this.id,
      firstname: this.firstname,
      lastname: this.lastname,
      othernames: this.othernames,
      password: this.password,
      email: this.email,
      role: this.role
    });
  }
}
