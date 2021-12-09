"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.container = exports.appContainer = void 0;
const inversify_1 = require("inversify");
const types_1 = __importDefault(require("../constants/types"));
const user_repository_1 = require("../infrastructure/repository/user-repository");
const home_repository_1 = require("../infrastructure/repository/home-repository");
const home_image_repository_1 = require("../infrastructure/repository/home-image-repository");
const notification_repository_1 = require("../infrastructure/repository/notification-repository");
const auth_service_1 = require("../domain/services/auth-service");
const user_service_1 = require("../domain/services/user-service");
const home_service_1 = require("../domain/services/home-service");
const notification_service_1 = require("../domain/services/notification-service");
const auth_handler_1 = require("../application/handlers/auth-handler");
const user_handler_1 = require("../application/handlers/user-handler");
const home_handler_1 = require("../application/handlers/home-handler");
const notification_handler_1 = require("../application/handlers/notification-handler");
class AppContainer {
    constructor() {
        this.container = null;
        this.container = new inversify_1.Container();
    }
    initializeBindings() {
        this.container
            .bind(types_1.default.UserRepository)
            .to(user_repository_1.UserRepository);
        this.container
            .bind(types_1.default.NotificationRepository)
            .to(notification_repository_1.NotificationRepository);
        this.container
            .bind(types_1.default.HomeRepository)
            .to(home_repository_1.HomeRepository);
        this.container
            .bind(types_1.default.HomeImageRepository)
            .to(home_image_repository_1.HomeImageRepository);
        this.container.bind(auth_service_1.AuthService).toSelf();
        this.container.bind(user_service_1.UserService).toSelf();
        this.container.bind(home_service_1.HomeService).toSelf();
        this.container.bind(notification_service_1.NotificationService).toSelf();
        this.container.bind(auth_handler_1.AuthHandler).toSelf();
        this.container.bind(user_handler_1.UserHandler).toSelf();
        this.container.bind(home_handler_1.HomeHandler).toSelf();
        this.container.bind(notification_handler_1.NotificationHandler).toSelf();
    }
}
exports.appContainer = new AppContainer();
exports.container = exports.appContainer.container;
