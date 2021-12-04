import {
  AllowNull,
  Column,
  Default,
  IsEmail,
  Model,
  PrimaryKey,
  Table,
  ForeignKey
} from 'sequelize-typescript';
import { UUIDV4, NOW, JSONB } from 'sequelize';
import { User } from '../../domain/aggregates/user-aggregates/user';
import { UserPrivilege } from '../../domain/aggregates/user-aggregates/user-privilege';

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

  @Column(JSONB)
  public priviledges: Record<UserPrivilege, boolean>;

  @AllowNull(true)
  @Column
  public avatar: string;

  public static fromDomain(user: User): UserDataModel {
    return new UserDataModel({
      firstname: user.firstname,
      lastname: user.lastname,
      othernames: user.othernames,
      email: user.email,
      priviledges: user.priviledges,
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
      priviledges: this.priviledges
    });
  }
}

export default UserDataModel;
