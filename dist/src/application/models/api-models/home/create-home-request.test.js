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
const create_home_request_1 = require("./create-home-request");
chai_1.default.use(sinon_chai_1.default);
chai_1.default.use(chai_as_promised_1.default);
describe(create_home_request_1.CreateHomeRequest.name, () => {
    let body;
    let headers;
    const getHeader = (key) => headers[key];
    beforeEach(() => {
        headers = {
            user: {
                id: faker_1.datatype.uuid()
            }
        };
        body = {
            name: faker_1.random.words(2),
            price: 500000,
            address: faker_1.random.words(5),
            sqrFtSize: 2000,
            description: faker_1.random.words(10),
            homeImages: [faker_1.random.words(1), faker_1.random.words(1)]
        };
    });
    test('should succesfully create model when all required params are provided', async () => {
        const req = (0, sinon_express_mock_1.mockReq)({
            headers,
            get: getHeader,
            body
        });
        const reqPromise = new create_home_request_1.CreateHomeRequest(req).validateInput({
            showFailingProperties: true
        });
        return (0, chai_1.expect)(reqPromise).to.not.be.rejectedWith(Error);
    });
});
