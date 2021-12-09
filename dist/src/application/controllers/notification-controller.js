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
exports.NoticationController = void 0;
const inversify_express_utils_1 = require("inversify-express-utils");
const create_notification_request_1 = require("../models/api-models/notification/create-notification-request");
const delete_notification_request_1 = require("../models/api-models/notification/delete-notification-request");
const update_status_request_1 = require("../models/api-models/notification/update-status-request");
const authorization_middleware_1 = require("../middleware/authorization-middleware");
const notification_handler_1 = require("../handlers/notification-handler");
const user_role_1 = require("../../domain/aggregates/user-aggregates/user-role");
let NoticationController = class NoticationController {
    constructor(notificationHandler) {
        this.notificationHandler = notificationHandler;
    }
    async createNotification(req, res) {
        const validateReq = await new create_notification_request_1.CreateNotificationRequest(req).validateInput();
        const createdNotification = await this.notificationHandler.handleCreateNotification(validateReq);
        res.status(200).json(createdNotification);
    }
    async getNotifications(_req, res) {
        const notifications = await this.notificationHandler.handleGetNotifications();
        res.status(200).json(notifications);
    }
    async updateStatus(req, res) {
        const validateReq = await new update_status_request_1.UpdateStatusRequest(req).validateInput();
        await this.notificationHandler.handleUpdateStatus(validateReq);
        res.status(200).json({ msg: 'status succesfully updated' });
    }
    async deleteNotification(req, res) {
        const validateReq = await new delete_notification_request_1.DeleteNotificationRequest(req).validateInput();
        await this.notificationHandler.handleDeleteNotification(validateReq);
        res.status(200).json({ msg: 'notification succesfully deleted' });
    }
};
__decorate([
    (0, inversify_express_utils_1.httpPost)('/'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], NoticationController.prototype, "createNotification", null);
__decorate([
    (0, inversify_express_utils_1.httpGet)('/'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], NoticationController.prototype, "getNotifications", null);
__decorate([
    (0, inversify_express_utils_1.httpPut)('/:notificationId', (0, authorization_middleware_1.AuthorizationMiddleware)(user_role_1.UserRole.ADMIN)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], NoticationController.prototype, "updateStatus", null);
__decorate([
    (0, inversify_express_utils_1.httpDelete)('/:notificationId'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], NoticationController.prototype, "deleteNotification", null);
NoticationController = __decorate([
    (0, inversify_express_utils_1.controller)('/notifications'),
    __metadata("design:paramtypes", [notification_handler_1.NotificationHandler])
], NoticationController);
exports.NoticationController = NoticationController;
