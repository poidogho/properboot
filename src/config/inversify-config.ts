import { Container } from 'inversify';
import TYPES from '../constants/types';

import { IUserRepository } from '../domain/aggregates/user-aggregates/user-repository-interface';
import { IHomeRepository } from '../domain/aggregates/home-aggregates/home-repository-interface';
import { IHomeImageRepository } from '../domain/aggregates/home-image-aggregates/home-image-repository-interface';
import { INotificationRepository } from '../domain/aggregates/notification-aggregates/notification-repository-interface';

import { UserRepository } from '../infrastructure/repository/user-repository';
import { HomeRepository } from '../infrastructure/repository/home-repository';
import { HomeImageRepository } from '../infrastructure/repository/home-image-repository';
import { NotificationRepository } from '../infrastructure/repository/notification-repository';

import { AuthService } from '../domain/services/auth-service';
import { UserService } from '../domain/services/user-service';
import { HomeService } from '../domain/services/home-service';
import { NotificationService } from '../domain/services/notification-service';

import { AuthHandler } from '../application/handlers/auth-handler';
import { UserHandler } from '../application/handlers/user-handler';
import { HomeHandler } from '../application/handlers/home-handler';
import { NotificationHandler } from '../application/handlers/notification-handler';

class AppContainer {
  public container: Container = null;

  constructor() {
    this.container = new Container();
  }

  initializeBindings() {
    this.container
      .bind<IUserRepository>(TYPES.UserRepository)
      .to(UserRepository);
    this.container
      .bind<INotificationRepository>(TYPES.NotificationRepository)
      .to(NotificationRepository);
    this.container
      .bind<IHomeRepository>(TYPES.HomeRepository)
      .to(HomeRepository);
    this.container
      .bind<IHomeImageRepository>(TYPES.HomeImageRepository)
      .to(HomeImageRepository);

    this.container.bind<AuthService>(AuthService).toSelf();
    this.container.bind<UserService>(UserService).toSelf();
    this.container.bind<HomeService>(HomeService).toSelf();
    this.container.bind<NotificationService>(NotificationService).toSelf();

    this.container.bind<AuthHandler>(AuthHandler).toSelf();
    this.container.bind<UserHandler>(UserHandler).toSelf();
    this.container.bind<HomeHandler>(HomeHandler).toSelf();
    this.container.bind<NotificationHandler>(NotificationHandler).toSelf();
  }
}

export const appContainer: AppContainer = new AppContainer();
export const container: Container = appContainer.container;
