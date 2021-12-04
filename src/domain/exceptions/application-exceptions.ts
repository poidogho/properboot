import { ErrorRecord } from './error-record';
import { ErrorCode } from '../../application/models/error-models/error-code';

export abstract class ApplicationException extends Error {
  errorRecords: ErrorRecord[];

  constructor(message: string, errorRecords: ErrorRecord[] | ErrorCode[]) {
    super(`${message} ${JSON.stringify(errorRecords)}`);
    this.name = this.constructor.name;
    this.errorRecords = this.wrapErrors(errorRecords);
  }

  private wrapErrors(errorRecords: ErrorRecord[] | ErrorCode[]): ErrorRecord[] {
    if (
      errorRecords.length > 0 &&
      Object.keys(errorRecords[0]).includes('errorCode')
    ) {
      return <ErrorRecord[]>errorRecords;
    }

    return (<ErrorCode[]>errorRecords).map((errorCode: ErrorCode) => {
      return { errorCode: errorCode };
    });
  }
}
