import { injectable } from 'inversify';
import { CreateNotificationRequest } from '../models/api-models/notification/create-notification-request';
import { UpdateStatusRequest } from '../models/api-models/notification/update-status-request';
import { DeleteNotificationRequest } from '../models/api-models/notification/delete-notification-request';
import { Notification } from '../../domain/aggregates/notification-aggregates/notification';
import { NotificationService } from '../../domain/services/notification-service';

@injectable()
export class NotificationHandler {
  constructor(private notificationService: NotificationService) {}

  public async handleCreateNotification(
    createNotificationRequest: CreateNotificationRequest
  ): Promise<Notification> {
    const createdNotification =
      await this.notificationService.createNotification(
        createNotificationRequest.toDomain()
      );
    return createdNotification;
  }

  public async handleGetNotifications(): Promise<Notification[]> {
    const notifications = await this.notificationService.getNotifications();
    return notifications;
  }

  public async handleUpdateStatus(
    updateStatusRequest: UpdateStatusRequest
  ): Promise<void> {
    const { notificationId, confirmed, adminId } = updateStatusRequest;
    await this.notificationService.updateStatus(
      notificationId,
      confirmed,
      adminId
    );
  }

  public async handleDeleteNotification(
    deleteNotificationRequest: DeleteNotificationRequest
  ): Promise<void> {
    const { notificationId } = deleteNotificationRequest;
    await this.notificationService.deleteNotification(notificationId);
  }
}
