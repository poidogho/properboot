import {
  Model,
  Default,
  PrimaryKey,
  Column,
  AllowNull,
  Table,
  HasMany
} from 'sequelize-typescript';
import { UUIDV4 } from 'sequelize';
import PropertyDataModel from './property';
import { City } from '../../domain/aggregates/city-aggregates/city';

@Table({ tableName: 'City', timestamps: true, paranoid: true })
export default class CityDataModel extends Model {
  @HasMany(() => PropertyDataModel)
  public properties: PropertyDataModel[];

  @Default(UUIDV4)
  @PrimaryKey
  @Column
  public id: string;

  @AllowNull(false)
  @Column
  public name: string;

  @AllowNull(false)
  @Column
  public province: string;

  @AllowNull(false)
  @Column
  public population: number;

  public static fromDomain(city: City): CityDataModel {
    return new CityDataModel({
      id: city.id,
      name: city.name,
      province: city.province,
      population: city.population
    });
  }
}
