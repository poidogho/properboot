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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const inversify_1 = require("inversify");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const types_1 = __importDefault(require("../../constants/types"));
const validation_exceptions_1 = require("../../domain/exceptions/validation-exceptions");
const config_1 = require("../../config/config");
const error_code_1 = require("../../application/models/error-models/error-code");
let UserService = class UserService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async createUser(user) {
        let userToCreate = await this.userRepository.getUserByAttribute({
            email: user.email
        });
        if (userToCreate) {
            throw new validation_exceptions_1.ValidationException('user already exists', [
                { errorCode: error_code_1.ErrorCode.USER_ALREADY_EXISTS }
            ]);
        }
        const salt = await bcrypt_1.default.genSalt(10);
        const hashedPassword = await bcrypt_1.default.hash(user.password, salt);
        userToCreate = user.builder().setPassword(hashedPassword).build();
        const saveUser = await this.userRepository.createUser(userToCreate);
        const payload = {
            user: {
                id: saveUser.id
            }
        };
        const token = jsonwebtoken_1.default.sign(payload, config_1.config.jwtSecret, { expiresIn: 3600 * 24 });
        return token;
    }
};
UserService = __decorate([
    (0, inversify_1.injectable)(),
    __param(0, (0, inversify_1.inject)(types_1.default.UserRepository)),
    __metadata("design:paramtypes", [Object])
], UserService);
exports.UserService = UserService;
