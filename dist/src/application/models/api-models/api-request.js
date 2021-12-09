"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.APIRequest = void 0;
const class_validator_1 = require("class-validator");
const request_validation_exception_1 = require("../error-models/request-validation-exception");
const error_code_1 = require("../error-models/error-code");
class APIRequest {
    async validateInput(options = {}) {
        const errors = await (0, class_validator_1.validate)(this, {
            skipMissingProperties: true
        });
        if (errors.length === 0) {
            return this;
        }
        const errorRecord = {
            errorCode: error_code_1.ErrorCode.INVALID_REQUEST_DATA
        };
        if (options.showFailingProperties) {
            errorRecord.properties = errors
                .map((error) => error.property)
                .filter((property) => Boolean(property));
        }
        throw new request_validation_exception_1.RequestValidationException(errors.toString(), [errorRecord]);
    }
    definedProperties() {
        const updateObject = {};
        const properties = Object.getOwnPropertyNames(this);
        properties.forEach((property) => {
            if (this[property] !== undefined) {
                updateObject[property] = this[property];
            }
        });
        return updateObject;
    }
}
exports.APIRequest = APIRequest;
