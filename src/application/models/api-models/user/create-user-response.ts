import { User } from '../../../../domain/aggregates/user-aggregates/user';

export class CreateUserResponse {
  public id: string;

  public firstname: string;

  public lastname: string;

  public email: string;

  constructor(user: User) {
    this.id = user.id;
    this.email = user.email;
    this.firstname = user.firstname;
    this.lastname = user.lastname;
  }

  public static fromDomain(user: User) {
    return new CreateUserResponse(user);
  }
}
