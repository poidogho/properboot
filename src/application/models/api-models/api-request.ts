import { ValidationError, validate } from 'class-validator';
import { RequestValidationException } from '../error-models/request-validation-exception';
import { ErrorCode } from '../error-models/error-code';
import { ErrorRecord } from '../../../domain/exceptions/error-record';

interface UpdateProperties {
  [name: string]: any;
}

type ValidateOptions = {
  showFailingProperties?: boolean;
};

export abstract class APIRequest {
  public async validateInput(options: ValidateOptions = {}) {
    let errors: ValidationError[] = await validate(this, {
      skipMissingProperties: true
    });

    if (errors.length === 0) {
      return this;
    }

    const errorRecord: ErrorRecord = {
      errorCode: ErrorCode.INVALID_REQUEST_DATA
    };
    if (options.showFailingProperties) {
      errorRecord.properties = errors
        .map((error) => error.property)
        .filter((property) => Boolean(property));
    }
    throw new RequestValidationException(errors.toString(), [errorRecord]);
  }

  public definedProperties(): UpdateProperties {
    let updateObject: UpdateProperties = {};
    let properties = Object.getOwnPropertyNames(this);

    properties.forEach((property: string) => {
      if (this[property] !== undefined) {
        updateObject[property] = this[property];
      }
    });
    return updateObject;
  }
}
