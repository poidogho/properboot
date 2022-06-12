import {
  Model,
  Default,
  PrimaryKey,
  Column,
  AllowNull,
  Table,
  ForeignKey
} from 'sequelize-typescript';
import { UUIDV4, STRING, NUMBER } from 'sequelize';
import CityDataModel from './city';

@Table({ tableName: 'Property', timestamps: true, paranoid: true })
export default class PropertyDataModel extends Model {
  @Default(UUIDV4)
  @PrimaryKey
  @Column
  public id: string;

  @ForeignKey(() => CityDataModel)
  @Column
  public cityId: string;

  @AllowNull(false)
  @Column({ type: NUMBER })
  public numOfRooms: number;

  @AllowNull(false)
  @Column({ type: NUMBER })
  public number: number;

  @AllowNull(false)
  @Column({ type: NUMBER })
  public price: number;

  @AllowNull(false)
  @Column({ type: STRING })
  public street: string;

  @AllowNull(false)
  @Column({ type: NUMBER })
  public sqrFtSize: number;

  @AllowNull(false)
  @Column({ type: STRING })
  public type: string;

  @AllowNull(false)
  @Column({ type: NUMBER })
  public buildYear: number;
}
