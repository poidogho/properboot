import { Notification } from './notification';

export interface INotificationRepository {
  getNotifications(): Promise<Notification[]>;
  createNotification(notification: Notification): Promise<Notification>;
  updateStatus(
    notificationId: string,
    confirmed: boolean,
    adminId: string
  ): Promise<void>;
  deleteNotification(notificationId: string): Promise<void>;
}
