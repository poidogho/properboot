import {
  AllowNull,
  Column,
  Default,
  IsEmail,
  Model,
  PrimaryKey,
  Table,
  HasMany
} from 'sequelize-typescript';
import { UUIDV4 } from 'sequelize';
import HomeDataModel from './home';
import { User } from '../../domain/aggregates/user-aggregates/user';
import NotificationDataModel from './notification';

@Table({ tableName: 'User', paranoid: true, timestamps: true })
export class UserDataModel extends Model {
  @HasMany(() => HomeDataModel)
  public homes: HomeDataModel[];

  @HasMany(() => NotificationDataModel)
  public notifications: NotificationDataModel[];

  @Default(UUIDV4)
  @PrimaryKey
  @Column
  public id: string;

  @AllowNull(false)
  @Column
  public firstname: string;

  @AllowNull(false)
  @Column
  public lastname: string;

  @AllowNull(true)
  @Column
  public othernames: string;

  @AllowNull(false)
  @IsEmail
  @Column
  public email: string;

  @AllowNull(false)
  @Column
  public password: string;

  @AllowNull(false)
  @Column
  public role: string;

  public static fromDomain(user: User): UserDataModel {
    return new UserDataModel({
      id: user.id,
      firstname: user.firstname,
      lastname: user.lastname,
      othernames: user.othernames,
      email: user.email,
      role: user.role,
      password: user.password
    });
  }

  public toDomain(): User {
    return new User({
      id: this.id,
      firstname: this.firstname,
      lastname: this.lastname,
      othernames: this.othernames,
      email: this.email,
      password: this.password,
      role: this.role
    });
  }
}

export default UserDataModel;
