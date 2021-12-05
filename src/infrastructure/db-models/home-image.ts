import {
  Model,
  Table,
  AllowNull,
  Column,
  BelongsTo,
  ForeignKey
} from 'sequelize-typescript';
import { STRING } from 'sequelize';
import HomeDataModel from './home';

@Table({ tableName: 'HomeImage', timestamps: true, paranoid: true })
export default class HomeImageDataModel extends Model {
  @BelongsTo(() => HomeDataModel)
  public home: HomeDataModel;

  @AllowNull(false)
  @Column({ type: STRING })
  @ForeignKey(() => HomeDataModel)
  public homeId: string;

  @AllowNull(false)
  @Column({ type: STRING })
  public imageUrl: string;

  public static fromDomain() {}

  public static toDomain() {}
}
