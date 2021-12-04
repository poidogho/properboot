import { UserPrivilege } from './user-privilege';
export type UserParameters = {
  id?: string;
  firstname: string;
  lastname: string;
  othernames?: string;
  email: string;
  password?: string;
  priviledges?: Partial<Record<UserPrivilege, boolean>>;
};

export class User {
  public readonly id: string;
  public readonly firstname: string;
  public readonly lastname: string;
  public readonly othernames: string;
  public readonly email: string;
  public readonly password: string;
  public readonly priviledges: Partial<Record<UserPrivilege, boolean>>;

  constructor(parameter: UserParameters) {
    this.id = parameter.id;
    this.firstname = parameter.firstname;
    this.lastname = parameter.lastname;
    this.othernames = parameter.othernames;
    this.email = parameter.email;
    this.password = parameter.password;
    this.priviledges = parameter.priviledges;
  }

  public builder(): UserBuilder {
    return new UserBuilder(this);
  }
}

export class UserBuilder {
  private parameters: UserParameters;

  constructor(parameters: User) {
    this.parameters = { ...parameters };
  }

  public setId(id: string) {
    this.parameters.id = id;
    return this;
  }

  public setfirstname(firstname: string) {
    this.parameters.firstname = firstname;
    return this;
  }

  public setLastname(lastname: string) {
    this.parameters.lastname = lastname;
    return this;
  }

  public setEmail(email: string) {
    this.parameters.email = email;
    return this;
  }

  public setPassword(password: string) {
    this.parameters.password = password;
    return this;
  }

  public build(): User {
    return new User(this.parameters);
  }
}
