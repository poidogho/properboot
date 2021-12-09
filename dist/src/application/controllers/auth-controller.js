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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const inversify_express_utils_1 = require("inversify-express-utils");
const http_status_codes_1 = require("http-status-codes");
const inversify_1 = require("inversify");
const authentication_request_1 = require("../models/api-models/auth/authentication-request");
const auth_handler_1 = require("../handlers/auth-handler");
let AuthController = class AuthController {
    constructor(authHandler) {
        this.authHandler = authHandler;
    }
    async authenticate(req, res) {
        const validatedReq = await new authentication_request_1.AuthenticationRequest(req).validateInput();
        const payload = await this.authHandler.handleAuthenticate(validatedReq);
        res.status(http_status_codes_1.StatusCodes.OK).send(payload);
    }
};
__decorate([
    (0, inversify_express_utils_1.httpPost)('/'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "authenticate", null);
AuthController = __decorate([
    (0, inversify_express_utils_1.controller)('/auth'),
    __param(0, (0, inversify_1.inject)(auth_handler_1.AuthHandler)),
    __metadata("design:paramtypes", [auth_handler_1.AuthHandler])
], AuthController);
exports.AuthController = AuthController;
