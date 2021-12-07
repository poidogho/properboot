import {
  Model,
  Default,
  PrimaryKey,
  Column,
  AllowNull,
  Table,
  HasMany,
  ForeignKey,
  BelongsTo
} from 'sequelize-typescript';
import { UUIDV4, STRING, NUMBER } from 'sequelize';
import { UserDataModel } from './user';
import HomeImageDataModel from './home-image';
import { Home } from '../../domain/aggregates/home-aggregates/home';

@Table({ tableName: 'Home', timestamps: true, paranoid: true })
export default class HomeDataModel extends Model {
  @HasMany(() => HomeImageDataModel)
  public homeImages: HomeImageDataModel[];

  @BelongsTo(() => UserDataModel)
  public user: UserDataModel;

  @Default(UUIDV4)
  @PrimaryKey
  @Column
  public id: string;

  @Default(UUIDV4)
  @ForeignKey(() => UserDataModel)
  @Column
  public authorId: string;

  @AllowNull(false)
  @Column({ type: STRING })
  public name: string;

  @AllowNull(false)
  @Column({ type: NUMBER })
  public price: number;

  @AllowNull(false)
  @Column({ type: STRING })
  public address: string;

  @AllowNull(false)
  @Column({ type: NUMBER })
  public sqrFtSize: number;

  @AllowNull(false)
  @Column({ type: STRING })
  public description: string;

  public static fromDomain(home: Home): HomeDataModel {
    return new HomeDataModel({
      id: home.id,
      authorId: home.authorId,
      name: home.name,
      price: home.price,
      address: home.address,
      sqrFtSize: home.sqrFtSize,
      description: home.description,
      homeImages: home.homeImages
    });
  }

  public toDomain(): Home {
    return new Home({
      authorId: this.authorId,
      name: this.name,
      price: this.price,
      address: this.address,
      sqrFtSize: this.sqrFtSize,
      description: this.description,
      homeImages: this.homeImages
    });
  }
}
