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
exports.AuthService = void 0;
const inversify_1 = require("inversify");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const types_1 = __importDefault(require("../../constants/types"));
const config_1 = require("../../config/config");
const validation_exceptions_1 = require("../../domain/exceptions/validation-exceptions");
const error_code_1 = require("../../application/models/error-models/error-code");
let AuthService = class AuthService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async login(email, password) {
        const user = await this.userRepository.getUserByAttribute({ email });
        if (!user) {
            throw new validation_exceptions_1.ValidationException('email or passord cannot be found', [
                { errorCode: error_code_1.ErrorCode.USERNAME_OR_PASSWORD_NOT_FOUND }
            ]);
        }
        const match = await bcrypt_1.default.compare(password, user.password);
        if (!match) {
            throw new validation_exceptions_1.ValidationException('email or passord IS WRONG', [
                { errorCode: error_code_1.ErrorCode.USERNAME_OR_PASSWORD_WRONG }
            ]);
        }
        const payload = {
            user: {
                id: user.id,
                role: user.role
            }
        };
        const token = jsonwebtoken_1.default.sign(payload, config_1.config.jwtSecret, { expiresIn: 3600 * 24 });
        return token;
    }
    async createUser(user) {
        return user;
    }
};
AuthService = __decorate([
    (0, inversify_1.injectable)(),
    __param(0, (0, inversify_1.inject)(types_1.default.UserRepository)),
    __metadata("design:paramtypes", [Object])
], AuthService);
exports.AuthService = AuthService;
