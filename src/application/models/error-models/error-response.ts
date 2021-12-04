import { ErrorRecord } from '../../../domain/exceptions/error-record';

export class ErrorResponse {
  readonly errorRecord: ErrorRecord[];
  readonly httpStatusCode: number;

  constructor(errorRecord: ErrorRecord[], httpStatusCode: number) {
    this.errorRecord = errorRecord;
    this.httpStatusCode = httpStatusCode;
  }

  public toJSON() {
    return { error: this.formatResponse() };
  }

  private formatResponse() {
    /* tslint:disable */
    return this.errorRecord.reduce((result, current: ErrorRecord) => {
      if ((current.properties || []).length > 0) {
        result[current.errorCode] = current.properties;
      } else {
        if (result[current.errorCode]) {
          result[current.errorCode].push(current.domainId);
        } else {
          result[current.errorCode] = current.domainId ? current.domainId : [];
        }
      }
      return result;
    }, {});
  }
}
