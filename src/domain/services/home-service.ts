import { inject, injectable } from 'inversify';
import TYPES from '../../constants/types';
import { IHomeRepository } from '../aggregates/home-aggregates/home-repository-interface';
import { Home } from '../aggregates/home-aggregates/home';

@injectable()
export class HomeService {
  constructor(
    @inject(TYPES.HomeRepository)
    private homeRepository: IHomeRepository
  ) {}

  public async createHome(home: Home): Promise<Home> {
    const homeToCreate = await this.homeRepository.createHome(home);
    return homeToCreate;
  }

  public async getHome(homeId: string): Promise<Home> {
    const home = await this.homeRepository.getHome(homeId);
    return home;
  }

  public async getHomes(): Promise<Home[]> {
    const homes = await this.homeRepository.getHomes();
    return homes;
  }
}
