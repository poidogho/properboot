import {
  AllowNull,
  Column,
  Default,
  IsEmail,
  Model,
  PrimaryKey,
  Table
} from 'sequelize-typescript';
import { UUIDV4, JSONB } from 'sequelize';
import { User } from '../../domain/aggregates/user-aggregates/user';

@Table({ tableName: 'Users', paranoid: true, timestamps: true })
export class UserDataModel extends Model {
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
  @Column(JSONB)
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
      role: this.role
    });
  }
}

export default UserDataModel;
