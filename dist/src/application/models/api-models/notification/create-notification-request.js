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
exports.CreateNotificationRequest = void 0;
const class_validator_1 = require("class-validator");
const notification_1 = require("../../../../domain/aggregates/notification-aggregates/notification");
const interest_type_1 = require("../../../../domain/aggregates/notification-aggregates/interest-type");
const api_request_1 = require("../api-request");
const uuid_1 = require("uuid");
class CreateNotificationRequest extends api_request_1.APIRequest {
    constructor(req) {
        super();
        const { firstname, lastname, interest, viewingTime } = req.body;
        this.id = (0, uuid_1.v4)();
        this.firstname = firstname;
        this.lastname = lastname;
        this.interest = interest;
        this.viewingTime = new Date(viewingTime);
    }
    toDomain() {
        return new notification_1.Notification({
            id: this.id,
            firstname: this.firstname,
            lastname: this.lastname,
            interest: this.interest,
            viewingTime: this.viewingTime
        });
    }
}
__decorate([
    (0, class_validator_1.IsDefined)(),
    (0, class_validator_1.IsUUID)('4'),
    __metadata("design:type", String)
], CreateNotificationRequest.prototype, "id", void 0);
__decorate([
    (0, class_validator_1.IsDefined)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateNotificationRequest.prototype, "firstname", void 0);
__decorate([
    (0, class_validator_1.IsDefined)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateNotificationRequest.prototype, "lastname", void 0);
__decorate([
    (0, class_validator_1.IsDefined)(),
    (0, class_validator_1.IsEnum)(interest_type_1.InterestType),
    __metadata("design:type", String)
], CreateNotificationRequest.prototype, "interest", void 0);
__decorate([
    (0, class_validator_1.IsDefined)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsDate)(),
    __metadata("design:type", Date)
], CreateNotificationRequest.prototype, "viewingTime", void 0);
exports.CreateNotificationRequest = CreateNotificationRequest;
