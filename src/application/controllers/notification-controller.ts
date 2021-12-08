import {
  controller,
  httpPost,
  httpGet,
  httpDelete,
  httpPut
} from 'inversify-express-utils';
import { Request, Response } from 'express';
import { CreateNotificationRequest } from '../models/api-models/notification/create-notification-request';
import { DeleteNotificationRequest } from '../models/api-models/notification/delete-notification-request';
import { UpdateStatusRequest } from '../models/api-models/notification/update-status-request';

import { NotificationHandler } from '../handlers/notification-handler';

@controller('/notifications')
export class NoticationController {
  constructor(private notificationHandler: NotificationHandler) {}

  @httpPost('/')
  public async createNotification(req: Request, res: Response) {
    const validateReq = await new CreateNotificationRequest(
      req
    ).validateInput();
    const createdNotification =
      await this.notificationHandler.handleCreateNotification(validateReq);
    res.status(200).json(createdNotification);
  }

  @httpGet('/')
  public async getNotifications(_req: Request, res: Response) {
    const notifications =
      await this.notificationHandler.handleGetNotifications();
    res.status(200).json(notifications);
  }

  @httpPut('/:notificationId')
  public async updateStatus(req: Request, res: Response) {
    const validateReq = await new UpdateStatusRequest(req).validateInput();
    await this.notificationHandler.handleUpdateStatus(validateReq);
    res.status(200).json({ msg: 'status succesfully updated' });
  }

  @httpDelete('/:notificationId')
  public async deleteNotification(req: Request, res: Response) {
    const validateReq = await new DeleteNotificationRequest(
      req
    ).validateInput();
    await this.notificationHandler.handleDeleteNotification(validateReq);
    res.status(200).json({ msg: 'notification succesfully deleted' });
  }
}
