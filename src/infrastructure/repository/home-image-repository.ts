import { injectable } from 'inversify';
import { HomeImage } from 'src/domain/aggregates/home-aggregates/home-image';
import { IHomeImageRepository } from '../../domain/aggregates/home-image-aggregates/home-image-repository-interface';
import HomeImageDataModel from '../db-models/home-image';

@injectable()
export class HomeImageRepository implements IHomeImageRepository {
  public async createHomeImages(homeImages: HomeImage[]): Promise<HomeImage[]> {
    const homeImagesDataModel = await HomeImageDataModel.bulkCreate(
      homeImages.map((homeImage) =>
        HomeImageDataModel.fromDomain(homeImage).toJSON()
      )
    );
    return homeImagesDataModel.map((homeImage) => homeImage.toDomain());
  }

  public async getHomeImages(homeId: string): Promise<HomeImage[]> {
    const homeImagesDataModels = await HomeImageDataModel.findAll({
      where: { homeId }
    });
    const homeImages = homeImagesDataModels.map((homeImage) =>
      homeImage.toDomain()
    );
    return homeImages;
  }
}
