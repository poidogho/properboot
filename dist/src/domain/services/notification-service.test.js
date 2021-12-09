"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = __importStar(require("chai"));
const chai_as_promised_1 = __importDefault(require("chai-as-promised"));
require("jest");
const sinon_1 = __importDefault(require("sinon"));
const sinon_chai_1 = __importDefault(require("sinon-chai"));
const Typemoq = __importStar(require("typemoq"));
const faker_1 = require("faker");
const notification_repository_1 = require("../../infrastructure/repository/notification-repository");
const interest_type_1 = require("../aggregates/notification-aggregates/interest-type");
const notification_1 = require("../aggregates/notification-aggregates/notification");
const notification_service_1 = require("./notification-service");
chai_1.default.use(sinon_chai_1.default);
chai_1.default.use(chai_as_promised_1.default);
describe(notification_service_1.NotificationService.name, () => {
    let notificationRepositoryMock;
    let notificationService;
    let notification;
    let adminId;
    beforeEach(() => {
        notificationRepositoryMock = Typemoq.Mock.ofType(notification_repository_1.NotificationRepository);
        notificationService = new notification_service_1.NotificationService(notificationRepositoryMock.object);
        notification = new notification_1.Notification({
            id: faker_1.datatype.uuid(),
            firstname: 'John',
            lastname: 'Doe',
            interest: interest_type_1.InterestType.SINGLE,
            viewingTime: new Date()
        });
        adminId = faker_1.datatype.uuid();
    });
    afterEach(() => {
        notificationRepositoryMock.verifyAll();
        sinon_1.default.restore();
    });
    describe('get notifications', () => {
        test('get notifications', () => {
            notificationRepositoryMock
                .setup((mock) => mock.getNotifications())
                .verifiable(Typemoq.Times.once());
            const promise = notificationService.getNotifications();
            return (0, chai_1.expect)(promise).to.be.eventually.be.fulfilled;
        });
    });
    describe('create notification', () => {
        test('create notification', () => {
            notificationRepositoryMock
                .setup((mock) => mock.createNotification(notification))
                .returns(async () => notification)
                .verifiable(Typemoq.Times.once());
            const promise = notificationService.createNotification(notification);
            return (0, chai_1.expect)(promise).to.be.eventually.be.fulfilled;
        });
    });
    describe('delete notification', () => {
        test('delete a notification', () => {
            notificationRepositoryMock
                .setup((mock) => mock.deleteNotification(notification.id))
                .verifiable(Typemoq.Times.once());
            const promise = notificationService.deleteNotification(notification.id);
            return (0, chai_1.expect)(promise).to.be.eventually.be.fulfilled;
        });
    });
    describe('update status', () => {
        test('update Status of a notification', () => {
            notificationRepositoryMock
                .setup((mock) => mock.updateStatus(notification.id, true, adminId))
                .verifiable(Typemoq.Times.once());
            const promise = notificationService.updateStatus(notification.id, true, adminId);
            return (0, chai_1.expect)(promise).to.be.eventually.be.fulfilled;
        });
    });
});
