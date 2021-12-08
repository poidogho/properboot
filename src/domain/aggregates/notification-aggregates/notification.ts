export type NotificationParameters = {
  id?: string;
  firstname: string;
  lastname: string;
  interest: string;
  viewingTime: Date;
  confirmed?: boolean;
  adminId?: string;
};

export class Notification {
  public readonly id: string;
  public readonly firstname: string;
  public readonly lastname: string;
  public readonly interest: string;
  public readonly viewingTime: Date;
  public readonly confirmed: boolean;
  public readonly adminId: string;

  constructor(parameter: NotificationParameters) {
    this.id = parameter.id;
    this.firstname = parameter.firstname;
    this.lastname = parameter.lastname;
    this.interest = parameter.interest;
    this.viewingTime = parameter.viewingTime;
    this.confirmed = parameter.confirmed;
    this.adminId = parameter.adminId;
  }

  public builder(): NotificationBuilder {
    return new NotificationBuilder(this);
  }
}

export class NotificationBuilder {
  private parameters: NotificationParameters;

  constructor(parameters: Notification) {
    this.parameters = { ...parameters };
  }

  public setfirstname(firstname: string) {
    this.parameters.firstname = firstname;
    return this;
  }

  public setLastname(lastname: string) {
    this.parameters.lastname = lastname;
    return this;
  }

  public setInterest(interest: string) {
    this.parameters.interest = interest;
    return this;
  }

  public setConfirmed(confirmed: boolean) {
    this.parameters.confirmed = confirmed;
    return this;
  }

  public setAdminId(adminId: string) {
    this.parameters.adminId = adminId;
    return this;
  }

  public build(): Notification {
    return new Notification(this.parameters);
  }
}
