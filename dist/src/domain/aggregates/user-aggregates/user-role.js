"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRole = void 0;
const validation_exceptions_1 = require("../../exceptions/validation-exceptions");
const error_code_1 = require("../../../application/models/error-models/error-code");
var UserRole;
(function (UserRole) {
    UserRole["USER"] = "user";
    UserRole["ADMIN"] = "admin";
})(UserRole = exports.UserRole || (exports.UserRole = {}));
(function (UserRole) {
    UserRole.fromString = (userPrivilege) => {
        const type = UserRole[userPrivilege];
        if (type === undefined) {
            throw new validation_exceptions_1.ValidationException(`${UserRole} is not a valid privilege`, [
                error_code_1.ErrorCode.INVALID_USER_PRIVILEGE
            ]);
        }
        return type;
    };
})(UserRole = exports.UserRole || (exports.UserRole = {}));
