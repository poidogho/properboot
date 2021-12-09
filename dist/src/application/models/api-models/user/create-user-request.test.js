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
require("jest");
require("reflect-metadata");
const chai_1 = __importStar(require("chai"));
const sinon_express_mock_1 = require("sinon-express-mock");
const sinon_chai_1 = __importDefault(require("sinon-chai"));
const chai_as_promised_1 = __importDefault(require("chai-as-promised"));
const faker_1 = require("faker");
const create_user_request_1 = require("./create-user-request");
chai_1.default.use(sinon_chai_1.default);
chai_1.default.use(chai_as_promised_1.default);
describe(create_user_request_1.CreateUserRequest.name, () => {
    let body;
    beforeEach(() => {
        body = {
            firstname: faker_1.name.firstName(),
            lastname: faker_1.name.lastName(),
            email: faker_1.internet.email(),
            password: faker_1.internet.password(),
            role: 'admin'
        };
    });
    test('should succesfully create user request model when all required params are provided', async () => {
        const req = (0, sinon_express_mock_1.mockReq)({
            body
        });
        const reqPromise = new create_user_request_1.CreateUserRequest(req).validateInput({
            showFailingProperties: true
        });
        return (0, chai_1.expect)(reqPromise).to.not.be.rejectedWith(Error);
    });
    test('should fail validation - missing password field', async () => {
        const req = (0, sinon_express_mock_1.mockReq)({
            body: { ...body, password: '' }
        });
        const reqPromise = new create_user_request_1.CreateUserRequest(req).validateInput({
            showFailingProperties: true
        });
        return (0, chai_1.expect)(reqPromise).to.be.rejectedWith(Error);
    });
});
