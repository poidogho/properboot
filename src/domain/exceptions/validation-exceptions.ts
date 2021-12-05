import { ErrorCode } from '../../application/models/error-models/error-code';
import { ApplicationException } from './application-exceptions';
import { ErrorRecord } from './error-record';

export class ValidationException extends ApplicationException {
  constructor(message: string, errorRecords: ErrorRecord[] | ErrorCode[]) {
    super(message, errorRecords);
  }
}
