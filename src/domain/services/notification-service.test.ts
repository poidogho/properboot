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
  let adminId: string;

  beforeEach(() => {
    notificationRepositoryMock = Typemoq.Mock.ofType(NotificationRepository);
    notificationService = new NotificationService(
      notificationRepositoryMock.object
    );

    notification = new Notification({
      id: '34444',
      firstname: 'John',
      lastname: 'Doe',
      interest: InterestType.SINGLE
    });

    adminId = '12345';
  });

  afterEach(() => {
    notificationRepositoryMock.verifyAll();
    sinon.restore();
  });

  describe('get notifications', () => {
    test('get notifications', () => {
      notificationRepositoryMock
        .setup((mock) => mock.getNotifications())
        .verifiable(Typemoq.Times.once());

      const promise = notificationService.getNotifications();
      return expect(promise).to.be.eventually.be.fulfilled;
    });
  });

  describe('create notification', () => {
    test('create notification', () => {
      notificationRepositoryMock
        .setup((mock) => mock.createNotification(notification))
        .returns(async () => notification)
        .verifiable(Typemoq.Times.once());

      const promise = notificationService.createNotification(notification);
      return expect(promise).to.be.eventually.be.fulfilled;
    });
  });

  describe('delete notification', () => {
    test('delete a notification', () => {
      notificationRepositoryMock
        .setup((mock) => mock.deleteNotification(notification.id))
        .verifiable(Typemoq.Times.once());
      console.log(notificationService);
      const promise = notificationService.deleteNotification(notification.id);
      return expect(promise).to.be.eventually.be.fulfilled;
    });
  });

  describe('update status', () => {
    test('update Status of a notification', () => {
      notificationRepositoryMock
        .setup((mock) => mock.updateStatus(notification.id, true, adminId))
        .verifiable(Typemoq.Times.once());

      const promise = notificationService.updateStatus(
        notification.id,
        true,
        adminId
      );
      return expect(promise).to.be.eventually.be.fulfilled;
    });
  });
});
