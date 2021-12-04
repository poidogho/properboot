import { Container } from 'inversify';
import TYPES from '../constants/types';
import { IUserRepository } from '../domain/aggregates/user-aggregates/user-repository-interface';
import { UserRepository } from '../infrastructure/repository/user-repository';
import { UserService } from '../domain/services/user-service';
import { UserHandler } from '../application/handlers/user-handler';
import { IPasswordManager } from '../domain/aggregates/user-aggregates/password-manager';
import { PasswordManager } from '../infrastructure/password-manager';

class AppContainer {
  public container: Container = null;

  constructor() {
    this.container = new Container();
  }

  initializeBindngs() {
    this.container
      .bind<IUserRepository>(TYPES.UserRepository)
      .to(UserRepository);
    this.container.bind<UserService>(UserService).toSelf();
    this.container.bind<UserHandler>(UserHandler).toSelf();
    container.bind<IPasswordManager>(TYPES.PasswordManager).to(PasswordManager);
  }
}

export const appContainer: AppContainer = new AppContainer();
export const container: Container = appContainer.container;
