"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = __importStar(require("chai"));
const chai_as_promised_1 = __importDefault(require("chai-as-promised"));
require("jest");
const sinon_1 = __importDefault(require("sinon"));
const sinon_chai_1 = __importDefault(require("sinon-chai"));
const Typemoq = __importStar(require("typemoq"));
const faker_1 = require("faker");
const user_repository_1 = require("../../infrastructure/repository/user-repository");
const user_1 = require("../aggregates/user-aggregates/user");
const user_service_1 = require("./user-service");
const validation_exceptions_1 = require("../exceptions/validation-exceptions");
const error_code_1 = require("../../application/models/error-models/error-code");
chai_1.default.use(sinon_chai_1.default);
chai_1.default.use(chai_as_promised_1.default);
describe(user_service_1.UserService.name, () => {
    let userRepositoryMock;
    let userService;
    let user;
    beforeEach(() => {
        userRepositoryMock = Typemoq.Mock.ofType(user_repository_1.UserRepository);
        userService = new user_service_1.UserService(userRepositoryMock.object);
        user = new user_1.User({
            id: faker_1.datatype.uuid(),
            firstname: faker_1.name.firstName(),
            lastname: faker_1.name.lastName(),
            email: faker_1.internet.email(),
            password: faker_1.internet.password(),
            role: 'admin'
        });
    });
    afterEach(() => {
        userRepositoryMock.verifyAll();
        sinon_1.default.restore();
    });
    describe('Create User', () => {
        test('should throw a validation error when user exists', () => {
            userRepositoryMock
                .setup((mock) => mock.getUserByAttribute({ email: user.email }))
                .returns(async () => user)
                .verifiable(Typemoq.Times.once());
            const promise = userService.createUser(user);
            return (0, chai_1.expect)(promise)
                .to.eventually.be.rejectedWith(validation_exceptions_1.ValidationException)
                .and.property('errorRecords')
                .to.be.deep.eq([{ errorCode: error_code_1.ErrorCode.USER_ALREADY_EXISTS }]);
        });
    });
});
