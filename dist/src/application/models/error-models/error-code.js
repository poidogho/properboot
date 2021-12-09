"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorCode = void 0;
var ErrorCode;
(function (ErrorCode) {
    // sort
    ErrorCode["INVALID_SORT_ORDER"] = "INVALID_SORT_ORDER";
    ErrorCode["INVALID_REQUEST_DATA"] = "INVALID REQUEST DATA";
    // Authorization
    ErrorCode["USER_NOT_AUTHORIZED"] = "USER NOT AUTHORIZED";
    // Users
    ErrorCode["USER_ALREADY_EXISTS"] = "USER ALREADY EXISTS";
    ErrorCode["USERNAME_OR_PASSWORD_WRONG"] = "USERNAME OR PASSWORD WRONG";
    ErrorCode["USERNAME_OR_PASSWORD_NOT_FOUND"] = "USERNAME OR PASSWORD NOT FOUND";
    ErrorCode["INVALID_USER_PRIVILEGE"] = "INVALID USER PRIVILEGE";
    // notification
    ErrorCode["INVALID_INTEREST_TYPE"] = "INVALID INTEREST TYPE";
})(ErrorCode = exports.ErrorCode || (exports.ErrorCode = {}));
