import 'jest';
import 'reflect-metadata';
import chai, { expect } from 'chai';
import { mockReq } from 'sinon-express-mock';
import sinonChai from 'sinon-chai';
import chaiAsPromised from 'chai-as-promised';
import { name, internet } from 'faker';
import { CreateUserRequest } from './create-user-request';

chai.use(sinonChai);
chai.use(chaiAsPromised);

describe(CreateUserRequest.name, () => {
  let body: any;

  beforeEach(() => {
    body = {
      firstname: name.firstName(),
      lastname: name.lastName(),
      email: internet.email(),
      password: internet.password(),
      role: 'admin'
    };
  });

  test('should succesfully create user request model when all required params are provided', async () => {
    const req = mockReq({
      body
    });
    const reqPromise = new CreateUserRequest(req).validateInput({
      showFailingProperties: true
    });
    return expect(reqPromise).to.not.be.rejectedWith(Error);
  });

  test('should fail validation - missing password field', async () => {
    const req = mockReq({
      body: { ...body, password: '' }
    });
    const reqPromise = new CreateUserRequest(req).validateInput({
      showFailingProperties: true
    });
    return expect(reqPromise).to.be.rejectedWith(Error);
  });
});
