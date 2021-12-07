import { injectable } from 'inversify';
import { CreateHomeRequest } from '../models/api-models/home/create-home-request';
import { GetHomeRequest } from '../models/api-models/home/get-home-request';
import { HomeService } from '../../domain/services/home-service';
import { Home } from '../../domain/aggregates/home-aggregates/home';

@injectable()
export class HomeHandler {
  constructor(private homeService: HomeService) {}

  public async handleCreateHome(
    createHomeRequest: CreateHomeRequest
  ): Promise<Home> {
    const createdHome = await this.homeService.createHome(
      createHomeRequest.toDomain()
    );
    return createdHome;
  }

  public async handleGetHome(getHomeRequest: GetHomeRequest): Promise<Home> {
    const home = this.homeService.getHome(getHomeRequest.homeId);
    return home;
  }

  public async handleGetHomes(): Promise<Home[]> {
    const homes = await this.homeService.getHomes();
    return homes;
  }
}
