import { Home } from './home';

export interface IHomeRepository {
  createHome(home: Home): Promise<Home>;
  getHome(homeId: string): Promise<Home>;
  getHomes(): Promise<Home[]>;
  updatehomeStatus(homeId: string, approved: boolean): Promise<void>;
}
