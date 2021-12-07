import { injectable } from 'inversify';
import { Notification } from 'src/domain/aggregates/notification-aggregates/notification';
import { INotificationRepository } from '../../domain/aggregates/notification-aggregates/notification-repository-interface';
import NotificationDataModel from '../db-models/notification';

@injectable()
export class NotificationRepository implements INotificationRepository {
  public async getNotifications(): Promise<Notification[]> {
    const notificationdataModels = await NotificationDataModel.findAll({});
    const notifications = notificationdataModels.map((notification) =>
      notification.toDomain()
    );
    return notifications;
  }

  public async createNotification(
    notification: Notification
  ): Promise<Notification> {
    const notificationToCreate = NotificationDataModel.fromDomain(notification);
    await notificationToCreate.save();
    return notificationToCreate.toDomain();
  }

  public async updateStatus(
    notificationId: string,
    confirmed: boolean,
    adminId: string
  ): Promise<void> {
    await NotificationDataModel.update(
      { confirmed, adminId },
      { where: { id: notificationId } }
    );
  }

  public async deleteNotification(notificationId: string): Promise<void> {
    await NotificationDataModel.destroy({ where: { id: notificationId } });
  }
}
