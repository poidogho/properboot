"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidationException = void 0;
const application_exceptions_1 = require("./application-exceptions");
class ValidationException extends application_exceptions_1.ApplicationException {
    constructor(message, errorRecords) {
        super(message, errorRecords);
    }
}
exports.ValidationException = ValidationException;
