"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InterestType = void 0;
const validation_exceptions_1 = require("../../exceptions/validation-exceptions");
const error_code_1 = require("../../../application/models/error-models/error-code");
var InterestType;
(function (InterestType) {
    InterestType["SINGLE"] = "single";
    InterestType["TOWN"] = "town";
    InterestType["CONDOMINIUM"] = "condemonium";
    InterestType["BUNGALOW"] = "bungalow";
})(InterestType = exports.InterestType || (exports.InterestType = {}));
(function (InterestType) {
    InterestType.fromString = (interestType) => {
        const type = InterestType[interestType];
        if (type === undefined) {
            throw new validation_exceptions_1.ValidationException(`${InterestType} is not a valid interest type`, [error_code_1.ErrorCode.INVALID_INTEREST_TYPE]);
        }
        return type;
    };
})(InterestType = exports.InterestType || (exports.InterestType = {}));
