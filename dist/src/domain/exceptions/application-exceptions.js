"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplicationException = void 0;
class ApplicationException extends Error {
    constructor(message, errorRecords) {
        super(`${message} ${JSON.stringify(errorRecords)}`);
        this.name = this.constructor.name;
        this.errorRecords = this.wrapErrors(errorRecords);
    }
    wrapErrors(errorRecords) {
        if (errorRecords.length > 0 &&
            Object.keys(errorRecords[0]).includes('errorCode')) {
            return errorRecords;
        }
        return errorRecords.map((errorCode) => {
            return { errorCode: errorCode };
        });
    }
}
exports.ApplicationException = ApplicationException;
