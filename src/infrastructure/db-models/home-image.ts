import {
  Model,
  Table,
  AllowNull,
  Column,
  BelongsTo,
  ForeignKey,
  PrimaryKey,
  Default
} from 'sequelize-typescript';
import { STRING, UUIDV4 } from 'sequelize';
import { HomeImage } from '../../domain/aggregates/home-aggregates/home-image';
import HomeDataModel from './home';

@Table({ tableName: 'HomeImage', timestamps: true, paranoid: true })
export default class HomeImageDataModel extends Model {
  @BelongsTo(() => HomeDataModel)
  public home: HomeDataModel;

  @Default(UUIDV4)
  @PrimaryKey
  @Column
  public id: string;

  @AllowNull(false)
  @Column({ type: STRING })
  @ForeignKey(() => HomeDataModel)
  public homeId: string;

  @AllowNull(false)
  @Column({ type: STRING })
  public imageUrl: string;

  public static fromDomain(homeImage: HomeImage): HomeImageDataModel {
    return new HomeImageDataModel({
      id: homeImage.id,
      homeId: homeImage.homeId,
      imageUrl: homeImage.imageUrl
    });
  }

  public toDomain(): HomeImage {
    return {
      id: this.id,
      homeId: this.homeId,
      imageUrl: this.imageUrl
    };
  }
}
