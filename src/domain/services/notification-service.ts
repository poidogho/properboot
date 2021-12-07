import { inject, injectable } from 'inversify';
import TYPES from '../../constants/types';
import { Notification } from '../aggregates/notification-aggregates/notification';
import { INotificationRepository } from '../aggregates/notification-aggregates/notification-repository-interface';

@injectable()
export class NotificationService {
  constructor(
    @inject(TYPES.NotificationRepository)
    private notificationRepository: INotificationRepository
  ) {}

  public async createNotification(
    notification: Notification
  ): Promise<Notification> {
    const newNotification =
      await this.notificationRepository.createNotification(notification);
    return newNotification;
  }

  public async getNotifications(): Promise<Notification[]> {
    const notifications = await this.notificationRepository.getNotifications();
    return notifications;
  }

  public async updateStatus(
    notificationId: string,
    confirm: boolean,
    adminId: string
  ): Promise<void> {
    await this.notificationRepository.updateStatus(
      notificationId,
      confirm,
      adminId
    );
  }

  public async deleteNotification(notificationId: string) {
    await this.notificationRepository.deleteNotification(notificationId);
  }
}
