import chai, { expect } from 'chai';
import chaiAsPromised from 'chai-as-promised';
import 'jest';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import * as Typemoq from 'typemoq';
import { datatype, name, internet } from 'faker';
import { UserRepository } from '../../infrastructure/repository/user-repository';
import { IUserRepository } from '../aggregates/user-aggregates/user-repository-interface';
import { User } from '../aggregates/user-aggregates/user';
import { UserService } from './user-service';
import { ValidationException } from '../exceptions/validation-exceptions';
import { ErrorCode } from '../../application/models/error-models/error-code';

chai.use(sinonChai);
chai.use(chaiAsPromised);

describe(UserService.name, () => {
  let userRepositoryMock: Typemoq.IMock<IUserRepository>;
  let userService: UserService;
  let user: User;

  beforeEach(() => {
    userRepositoryMock = Typemoq.Mock.ofType(UserRepository);
    userService = new UserService(userRepositoryMock.object);
    user = new User({
      id: datatype.uuid(),
      firstname: name.firstName(),
      lastname: name.lastName(),
      email: internet.email(),
      password: internet.password(),
      role: 'admin'
    });
  });

  afterEach(() => {
    userRepositoryMock.verifyAll();
    sinon.restore();
  });

  describe('Create User', () => {
    test('should throw a validation error when user exists', () => {
      userRepositoryMock
        .setup((mock) => mock.getUserByAttribute({ email: user.email }))
        .returns(async () => user)
        .verifiable(Typemoq.Times.once());

      const promise = userService.createUser(user);
      return expect(promise)
        .to.eventually.be.rejectedWith(ValidationException)
        .and.property('errorRecords')
        .to.be.deep.eq([{ errorCode: ErrorCode.USER_ALREADY_EXISTS }]);
    });
  });
});
