import {
  Model,
  Default,
  PrimaryKey,
  Column,
  AllowNull,
  Table,
  ForeignKey,
  BelongsTo
} from 'sequelize-typescript';
import { ENUM, UUIDV4 } from 'sequelize';
import { UserDataModel } from './user';
import { Notification } from '../../domain/aggregates/notification-aggregates/notification';
import { InterestType } from '../../domain/aggregates/notification-aggregates/interest';

@Table({ tableName: 'Notification', timestamps: true, paranoid: true })
export default class NotificationDataModel extends Model {
  @BelongsTo(() => UserDataModel)
  public user: UserDataModel;

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

  @AllowNull(false)
  @Column({
    type: ENUM(
      InterestType.SINGLE,
      InterestType.TOWN,
      InterestType.CONDOMINIUM,
      InterestType.BUNGALOW
    )
  })
  public interest: string;

  @Column
  public confirmed: boolean;

  @ForeignKey(() => UserDataModel)
  @Column
  public adminId: string;

  public static fromDomain(notification: Notification): NotificationDataModel {
    return new NotificationDataModel({
      id: notification.id,
      firstname: notification.firstname,
      lastname: notification.lastname,
      interest: notification.interest,
      confirm: notification.confirmed,
      adminId: notification.adminId
    });
  }

  public toDomain(): Notification {
    return new Notification({
      id: this.id,
      firstname: this.firstname,
      lastname: this.lastname,
      interest: this.interest,
      confirmed: this.confirmed,
      adminId: this.adminId
    });
  }
}
