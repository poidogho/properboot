import { HomeImage } from '../home-aggregates/home-image';

export interface IHomeImageRepository {
  createHomeImages(homeImages: HomeImage[]): Promise<HomeImage[]>;
  getHomeImages(homeId: string): Promise<HomeImage[]>;
}
