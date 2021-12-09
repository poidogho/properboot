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
exports.HomeController = void 0;
const inversify_express_utils_1 = require("inversify-express-utils");
const create_home_request_1 = require("../models/api-models/home/create-home-request");
const get_home_request_1 = require("../models/api-models/home/get-home-request");
const update_home_status_request_1 = require("../models/api-models/home/update-home-status-request");
const authorization_middleware_1 = require("../middleware/authorization-middleware");
const user_role_1 = require("../../domain/aggregates/user-aggregates/user-role");
const home_handler_1 = require("../handlers/home-handler");
let HomeController = class HomeController {
    constructor(homeHandler) {
        this.homeHandler = homeHandler;
    }
    async createHome(req, res) {
        const validateReq = await new create_home_request_1.CreateHomeRequest(req).validateInput();
        const createdHome = await this.homeHandler.handleCreateHome(validateReq);
        res.status(200).json(createdHome);
    }
    async getHomes(_req, res) {
        const homes = await this.homeHandler.handleGetHomes();
        res.status(200).json(homes);
    }
    async getHome(req, res) {
        const validateReq = await new get_home_request_1.GetHomeRequest(req).validateInput();
        const home = await this.homeHandler.handleGetHome(validateReq);
        res.status(200).json(home);
    }
    async updateHomeStatus(req, res) {
        const validateReq = await new update_home_status_request_1.UpdateHomeStatusRequest(req).validateInput();
        await this.homeHandler.handleUpdateHomeStatus(validateReq);
        res.status(200).json({ msg: 'status succesfully updated' });
    }
};
__decorate([
    (0, inversify_express_utils_1.httpPost)('/', (0, authorization_middleware_1.AuthorizationMiddleware)(user_role_1.UserRole.USER)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], HomeController.prototype, "createHome", null);
__decorate([
    (0, inversify_express_utils_1.httpGet)('/'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], HomeController.prototype, "getHomes", null);
__decorate([
    (0, inversify_express_utils_1.httpGet)('/:homeId'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], HomeController.prototype, "getHome", null);
__decorate([
    (0, inversify_express_utils_1.httpPut)('/:homeId', (0, authorization_middleware_1.AuthorizationMiddleware)(user_role_1.UserRole.ADMIN)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], HomeController.prototype, "updateHomeStatus", null);
HomeController = __decorate([
    (0, inversify_express_utils_1.controller)('/homes'),
    __metadata("design:paramtypes", [home_handler_1.HomeHandler])
], HomeController);
exports.HomeController = HomeController;
