"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthorizationMiddleware = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const unauthorized_access_exception_1 = require("../exceptions/unauthorized-access-exception");
const error_code_1 = require("../models/error-models/error-code");
const config_1 = require("../../config/config");
const authorizationMiddleware = (userRole) => {
    return async (req, _res, next) => {
        try {
            const token = req.header('x-auth-token');
            if (!token) {
                throw new unauthorized_access_exception_1.UnauthorizedAccessException(`User don't have the required privilege`, [error_code_1.ErrorCode.USER_NOT_AUTHORIZED]);
            }
            else {
                const decoded = jsonwebtoken_1.default.verify(token, config_1.config.jwtSecret);
                req.user = decoded.user;
                if (req.user.role !== userRole) {
                    throw new unauthorized_access_exception_1.UnauthorizedAccessException(`User don't have the required privilege`, [error_code_1.ErrorCode.USER_NOT_AUTHORIZED]);
                }
                next();
            }
        }
        catch (error) {
            next(error);
        }
    };
};
exports.AuthorizationMiddleware = authorizationMiddleware;
