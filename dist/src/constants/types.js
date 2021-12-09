"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TYPES = {
    UserRepository: Symbol.for('UserRepository'),
    PasswordManager: Symbol.for('PasswordManager'),
    HomeRepository: Symbol.for('HomeRepository'),
    HomeImageRepository: Symbol.for('HomeImageRepository'),
    NotificationRepository: Symbol.for('NotificationRepository')
};
exports.default = TYPES;
