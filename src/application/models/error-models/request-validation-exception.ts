import { ErrorCode } from '../error-models/error-code';
import { ApplicationException } from '../../../domain/exceptions/application-exceptions';
import { ErrorRecord } from '../../../domain/exceptions/error-record';

export class RequestValidationException extends ApplicationException {
  constructor(message: string, errorRecords: ErrorRecord[] | ErrorCode[]) {
    super(message, errorRecords);
  }
}
