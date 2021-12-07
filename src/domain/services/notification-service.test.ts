import chai, { expect } from 'chai';
import chaiAsPromised from 'chai-as-promised';
import 'jest';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import * as Typemoq from 'typemoq';
import { NotificationRepository } from '../../infrastructure/repository/notification-repository';
import { INotificationRepository } from '../aggregates/notification-aggregates/notification-repository-interface';
import { InterestType } from '../aggregates/notification-aggregates/interest';
import { Notification } from '../aggregates/notification-aggregates/notification';
import { NotificationService } from './notification-service';

chai.use(sinonChai);
chai.use(chaiAsPromised);

describe(NotificationService.name, () => {
  let notificationRepositoryMock: Typemoq.IMock<INotificationRepository>;
  let notificationService: NotificationService;
  let notification: Notification;

  beforeEach(() => {
    notificationRepositoryMock = Typemoq.Mock.ofType(NotificationRepository);
    notificationService = new NotificationService(
      notificationRepositoryMock.object
    );

    notification = new Notification({
      firstname: 'John',
      lastname: 'Doe',
      interest: InterestType.SINGLE
    });
  });

  afterEach(() => {
    notificationRepositoryMock.verifyAll();
    sinon.restore();
  });

  describe('get notifications', () => {
    console.log(notification);
    test('get notifications', () => {
      notificationRepositoryMock
        .setup((mock) => mock.getNotifications())
        .verifiable(Typemoq.Times.once());

      const promise = notificationService.getNotifications();
      return expect(promise).to.be.eventually.be.fulfilled;
    });
  });
});
