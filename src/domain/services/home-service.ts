import { inject, injectable } from 'inversify';
import TYPES from '../../constants/types';
import { IHomeRepository } from '../aggregates/home-aggregates/home-repository-interface';
import { IHomeImageRepository } from '../aggregates/home-image-aggregates/home-image-repository-interface';
import { Home } from '../aggregates/home-aggregates/home';

@injectable()
export class HomeService {
  constructor(
    @inject(TYPES.HomeRepository)
    private homeRepository: IHomeRepository,
    @inject(TYPES.HomeImageRepository)
    private homeImageRepository: IHomeImageRepository
  ) {}

  public async createHome(home: Home): Promise<Home> {
    const homeToCreate = await this.homeRepository.createHome(home);
    const homeImages = await this.homeImageRepository.createHomeImages(
      home.homeImages
    );
    const createdHome = homeToCreate
      .builder()
      .setHomeImages(homeImages)
      .build();
    return createdHome;
  }

  public async getHome(homeId: string): Promise<Home> {
    let homeWithImages;
    const home = await this.homeRepository.getHome(homeId);
    if (home) {
      const homeImages = await this.homeImageRepository.getHomeImages(homeId);
      homeWithImages = home.builder().setHomeImages(homeImages).build();
    }
    return home ? homeWithImages : undefined;
  }

  public async getHomes(): Promise<Home[]> {
    const homes = await this.homeRepository.getHomes();
    return homes;
  }
}
