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
var NotificationDataModel_1;
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const sequelize_1 = require("sequelize");
const user_1 = require("./user");
const notification_1 = require("../../domain/aggregates/notification-aggregates/notification");
const interest_type_1 = require("../../domain/aggregates/notification-aggregates/interest-type");
let NotificationDataModel = NotificationDataModel_1 = class NotificationDataModel extends sequelize_typescript_1.Model {
    static fromDomain(notification) {
        return new NotificationDataModel_1({
            id: notification.id,
            firstname: notification.firstname,
            lastname: notification.lastname,
            interest: notification.interest,
            confirm: notification.confirmed,
            adminId: notification.adminId,
            viewingTime: notification.viewingTime
        });
    }
    toDomain() {
        return new notification_1.Notification({
            id: this.id,
            firstname: this.firstname,
            lastname: this.lastname,
            interest: this.interest,
            viewingTime: this.viewingTime,
            confirmed: this.confirmed,
            adminId: this.adminId
        });
    }
};
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => user_1.UserDataModel),
    __metadata("design:type", user_1.UserDataModel)
], NotificationDataModel.prototype, "user", void 0);
__decorate([
    (0, sequelize_typescript_1.Default)(sequelize_1.UUIDV4),
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], NotificationDataModel.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.AllowNull)(false),
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], NotificationDataModel.prototype, "firstname", void 0);
__decorate([
    (0, sequelize_typescript_1.AllowNull)(false),
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], NotificationDataModel.prototype, "lastname", void 0);
__decorate([
    (0, sequelize_typescript_1.AllowNull)(false),
    (0, sequelize_typescript_1.Column)({
        type: (0, sequelize_1.ENUM)(interest_type_1.InterestType.SINGLE, interest_type_1.InterestType.TOWN, interest_type_1.InterestType.CONDOMINIUM, interest_type_1.InterestType.BUNGALOW)
    }),
    __metadata("design:type", String)
], NotificationDataModel.prototype, "interest", void 0);
__decorate([
    (0, sequelize_typescript_1.AllowNull)(false),
    sequelize_typescript_1.Column,
    __metadata("design:type", Date)
], NotificationDataModel.prototype, "viewingTime", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Boolean)
], NotificationDataModel.prototype, "confirmed", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => user_1.UserDataModel),
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], NotificationDataModel.prototype, "adminId", void 0);
NotificationDataModel = NotificationDataModel_1 = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'Notification', timestamps: true, paranoid: true })
], NotificationDataModel);
exports.default = NotificationDataModel;
