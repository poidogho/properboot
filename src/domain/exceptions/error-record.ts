import { ErrorCode } from '../../application/models/error-models/error-code';

export type ErrorRecord = {
  errorCode: ErrorCode;
  domainId?: string[];
  properties?: string[];
};
