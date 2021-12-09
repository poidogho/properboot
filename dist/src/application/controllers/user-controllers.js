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
exports.UserController = void 0;
const inversify_express_utils_1 = require("inversify-express-utils");
const create_user_request_1 = require("../models/api-models/user/create-user-request");
const user_handler_1 = require("../handlers/user-handler");
let UserController = class UserController {
    constructor(userHandler) {
        this.userHandler = userHandler;
    }
    async createUser(req, res) {
        const validateReq = await new create_user_request_1.CreateUserRequest(req).validateInput();
        const createdUser = await this.userHandler.handleCreateUser(validateReq);
        res.status(200).json(createdUser);
    }
};
__decorate([
    (0, inversify_express_utils_1.httpPost)('/'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "createUser", null);
UserController = __decorate([
    (0, inversify_express_utils_1.controller)('/users'),
    __metadata("design:paramtypes", [user_handler_1.UserHandler])
], UserController);
exports.UserController = UserController;
