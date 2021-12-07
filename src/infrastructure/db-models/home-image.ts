import {
  Model,
  Table,
  AllowNull,
  Column,
  BelongsTo,
  ForeignKey
} from 'sequelize-typescript';
import { STRING } from 'sequelize';
import { HomeImage } from '../../domain/aggregates/home-aggregates/home-image';
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

  public static fromDomain(home: HomeImage): HomeImageDataModel {
    return new HomeImageDataModel({
      homeId: home.homeId,
      imageUrl: home.imageUrl
    });
  }

  public toDomain(): HomeImage {
    return {
      homeId: this.homeId,
      imageUrl: this.imageUrl
    };
  }
}
