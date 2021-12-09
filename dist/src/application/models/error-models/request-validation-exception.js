"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestValidationException = void 0;
const application_exceptions_1 = require("../../../domain/exceptions/application-exceptions");
class RequestValidationException extends application_exceptions_1.ApplicationException {
    constructor(message, errorRecords) {
        super(message, errorRecords);
    }
}
exports.RequestValidationException = RequestValidationException;
