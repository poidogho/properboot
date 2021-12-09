"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationHandler = void 0;
const inversify_1 = require("inversify");
const notification_service_1 = require("../../domain/services/notification-service");
let NotificationHandler = class NotificationHandler {
    constructor(notificationService) {
        this.notificationService = notificationService;
    }
    async handleCreateNotification(createNotificationRequest) {
        const createdNotification = await this.notificationService.createNotification(createNotificationRequest.toDomain());
        return createdNotification;
    }
    async handleGetNotifications() {
        const notifications = await this.notificationService.getNotifications();
        return notifications;
    }
    async handleUpdateStatus(updateStatusRequest) {
        const { notificationId, confirmed, adminId } = updateStatusRequest;
        await this.notificationService.updateStatus(notificationId, confirmed, adminId);
    }
    async handleDeleteNotification(deleteNotificationRequest) {
        const { notificationId } = deleteNotificationRequest;
        await this.notificationService.deleteNotification(notificationId);
    }
};
NotificationHandler = __decorate([
    (0, inversify_1.injectable)(),
    __metadata("design:paramtypes", [notification_service_1.NotificationService])
], NotificationHandler);
exports.NotificationHandler = NotificationHandler;
