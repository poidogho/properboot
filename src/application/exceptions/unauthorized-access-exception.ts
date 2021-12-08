import { ErrorCode } from '../models/error-models/error-code';
import { ErrorRecord } from '../../domain/exceptions/error-record';
import { ApplicationException } from '../../domain/exceptions/application-exceptions';

export class UnauthorizedAccessException extends ApplicationException {
  constructor(message: string, errorRecords: ErrorRecord[] | ErrorCode[]) {
    super(message, errorRecords);
  }
}
