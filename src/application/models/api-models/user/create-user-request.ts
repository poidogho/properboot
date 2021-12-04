import {
  IsDefined,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsEmail,
  IsArray,
  IsBoolean
} from 'class-validator';
import { User } from '../../../../domain/aggregates/user-aggregates/user';
import { UserPrivilege } from '../../../../domain/aggregates/user-aggregates/user-privilege';
import { APIRequest } from '../api-request';
import { Request } from 'express';

class Privileges implements Record<UserPrivilege, boolean> {
  @IsOptional()
  @IsBoolean()
  public seller: boolean;

  @IsOptional()
  @IsBoolean()
  public buyer: boolean;

  constructor(req: Partial<Record<UserPrivilege, boolean>>) {
    this.seller = req.seller;
    this.buyer = req.buyer;
  }
}

export class CreateUserRequest extends APIRequest {
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

  @IsOptional()
  @IsArray()
  priviledges: Privileges;

  constructor(req: Request) {
    super();
    this.firstname = req.body.firstname;
    this.lastname = req.body.lastname;
    this.email = req.body.email;
    this.password = req.body.password;
    this.priviledges = req.body.privileges
      ? new Privileges(req.body.privileges)
      : undefined;
  }

  public toDomain(): User {
    return new User({
      firstname: this.firstname,
      lastname: this.lastname,
      password: this.password,
      email: this.email,
      priviledges: this.priviledges
    });
  }
}
