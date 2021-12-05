import { Container } from 'inversify';
import TYPES from '../constants/types';
import { IUserRepository } from '../domain/aggregates/user-aggregates/user-repository-interface';
import { UserRepository } from '../infrastructure/repository/user-repository';
import { UserService } from '../domain/services/user-service';
import { UserHandler } from '../application/handlers/user-handler';

class AppContainer {
  public container: Container = null;

  constructor() {
    this.container = new Container();
  }

  initializeBindings() {
    this.container
      .bind<IUserRepository>(TYPES.UserRepository)
      .to(UserRepository);
    this.container.bind<UserService>(UserService).toSelf();
    this.container.bind<UserHandler>(UserHandler).toSelf();
  }
}

export const appContainer: AppContainer = new AppContainer();
export const container: Container = appContainer.container;
