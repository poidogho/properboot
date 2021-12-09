"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserPrivilege = void 0;
const validation_exceptions_1 = require("../../exceptions/validation-exceptions");
const error_code_1 = require("../../../application/models/error-models/error-code");
var UserPrivilege;
(function (UserPrivilege) {
    UserPrivilege["USER"] = "user";
    UserPrivilege["ADMIN"] = "admin";
})(UserPrivilege = exports.UserPrivilege || (exports.UserPrivilege = {}));
(function (UserPrivilege) {
    UserPrivilege.fromString = (userPrivilege) => {
        const type = UserPrivilege[userPrivilege];
        if (type === undefined) {
            throw new validation_exceptions_1.ValidationException(`${UserPrivilege} is not a valid privilege`, [error_code_1.ErrorCode.INVALID_USER_PRIVILEGE]);
        }
        return type;
    };
})(UserPrivilege = exports.UserPrivilege || (exports.UserPrivilege = {}));
