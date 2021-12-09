"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorResponse = void 0;
class ErrorResponse {
    constructor(errorRecord, httpStatusCode) {
        this.errorRecord = errorRecord;
        this.httpStatusCode = httpStatusCode;
    }
    toJSON() {
        return { error: this.formatResponse() };
    }
    formatResponse() {
        /* tslint:disable */
        return this.errorRecord.reduce((result, current) => {
            if ((current.properties || []).length > 0) {
                result[current.errorCode] = current.properties;
            }
            else {
                if (result[current.errorCode]) {
                    result[current.errorCode].push(current.domainId);
                }
                else {
                    result[current.errorCode] = current.domainId ? current.domainId : [];
                }
            }
            return result;
        }, {});
    }
}
exports.ErrorResponse = ErrorResponse;
