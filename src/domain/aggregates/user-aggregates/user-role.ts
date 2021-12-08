import { ValidationException } from '../../exceptions/validation-exceptions';
import { ErrorCode } from '../../../application/models/error-models/error-code';

export enum UserRole {
  USER = 'user',
  ADMIN = 'admin'
}

export namespace UserRole {
  export const fromString = (userPrivilege: string): UserRole => {
    const type = UserRole[userPrivilege];

    if (type === undefined) {
      throw new ValidationException(`${UserRole} is not a valid privilege`, [
        ErrorCode.INVALID_USER_PRIVILEGE
      ]);
    }

    return type;
  };
}
