import { IsDefined, IsNotEmpty, IsString, IsEmail } from 'class-validator';
import { APIRequest } from '../api-request';
import { Request } from 'express';

export class AuthenticationRequest extends APIRequest {
  @IsDefined()
  @IsNotEmpty()
  @IsEmail()
  public email: string;

  @IsDefined()
  @IsNotEmpty()
  @IsString()
  public password: string;

  constructor(req: Request) {
    super();
    this.email = req.body.email;
    this.password = req.body.password;
  }
}
