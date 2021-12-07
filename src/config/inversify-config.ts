import { Container } from 'inversify';
import TYPES from '../constants/types';
import { IUserRepository } from '../domain/aggregates/user-aggregates/user-repository-interface';
import { INotificationRepository } from '../domain/aggregates/notification-aggregates/notification-repository-interface';
import { UserRepository } from '../infrastructure/repository/user-repository';
import { NotificationRepository } from '../infrastructure/repository/notification-repository';
import { UserService } from '../domain/services/user-service';
import { NotificationService } from '../domain/services/notification-service';
import { UserHandler } from '../application/handlers/user-handler';
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

    this.container.bind<UserService>(UserService).toSelf();
    this.container.bind<NotificationService>(NotificationService).toSelf();

    this.container.bind<UserHandler>(UserHandler).toSelf();
    this.container.bind<NotificationHandler>(NotificationHandler).toSelf();
  }
}

export const appContainer: AppContainer = new AppContainer();
export const container: Container = appContainer.container;
