"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const inversify_1 = require("inversify");
const user_1 = require("../db-models/user");
let UserRepository = class UserRepository {
    async getUser(userId) {
        const user = await user_1.UserDataModel.findByPk(userId);
        return user ? user.toDomain() : undefined;
    }
    async getUserByAttribute(userQuery) {
        const query = { where: {} };
        if (userQuery.email) {
            query['where']['email'] = userQuery.email;
        }
        if (userQuery.firstName) {
            query['where']['firstName'] = userQuery.firstName;
        }
        if (userQuery.lastName) {
            query['where']['lastName'] = userQuery.lastName;
        }
        const userDataModel = await user_1.UserDataModel.findOne(query);
        return userDataModel ? userDataModel.toDomain() : undefined;
    }
    async createUser(user) {
        let userData = user_1.UserDataModel.fromDomain(user);
        userData = await userData.save();
        return userData.toDomain();
    }
};
UserRepository = __decorate([
    (0, inversify_1.injectable)()
], UserRepository);
exports.UserRepository = UserRepository;
