import { injectable } from 'inversify';
import { Home } from 'src/domain/aggregates/home-aggregates/home';
import { IHomeRepository } from '../../domain/aggregates/home-aggregates/home-repository-interface';
import HomeDataModel from '../db-models/home';

@injectable()
export class HomeRepository implements IHomeRepository {
  public async createHome(home: Home): Promise<Home> {
    let homeDataModel = HomeDataModel.fromDomain(home);
    homeDataModel = await homeDataModel.save();
    return homeDataModel.toDomain();
  }

  public async getHome(homeId: string): Promise<Home> {
    const homeDataModel = await HomeDataModel.findOne({
      where: {
        id: homeId
      }
    });
    return homeDataModel.toDomain();
  }

  public async getHomes(): Promise<Home[]> {
    const homeDataModels = await HomeDataModel.findAll({});
    const homes = homeDataModels.map((home) => home.toDomain());
    return homes;
  }
}
