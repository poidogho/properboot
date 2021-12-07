import { injectable } from 'inversify';
import { Home } from 'src/domain/aggregates/home-aggregates/home';
import { HomeImage } from 'src/domain/aggregates/home-aggregates/home-image';
import { IHomeRepository } from '../../domain/aggregates/home-aggregates/home-repository-interface';
import HomeDataModel from '../db-models/home';
import HomeImageDataModel from '../db-models/home-image';

@injectable()
export class HomeRepository implements IHomeRepository {
  constructor() {
    HomeImageDataModel.removeAttribute('id');
  }

  public async createHome(home: Home): Promise<Home> {
    const homeDataModel = await HomeDataModel.fromDomain(home).save();
    const homeImages = await this.createHomeImages(home.homeImages);

    return homeDataModel.toDomain().builder().setHomeImages(homeImages).build();
  }

  public async getHome(homeId: string): Promise<Home> {
    const homeDataModel = await HomeDataModel.findOne({
      where: {
        homeId
      }
    });
    return homeDataModel.toDomain();
  }

  public async getHomes(): Promise<Home[]> {
    const homeDataModels = await HomeDataModel.findAll({});
    const homes = homeDataModels.map((home) => home.toDomain());
    return homes;
  }

  private async createHomeImages(
    homeImages: HomeImage[]
  ): Promise<HomeImage[]> {
    const homeImagesDataModel = await HomeImageDataModel.bulkCreate(
      homeImages.map((homeImage) =>
        HomeImageDataModel.fromDomain(homeImage).toJSON()
      )
    );

    return homeImagesDataModel.map((homeImage) => homeImage.toDomain());
  }
}
