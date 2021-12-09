"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
require("jest");
require("reflect-metadata");
const sinon_1 = __importDefault(require("sinon"));
const home_1 = __importDefault(require("../db-models/home"));
const home_repository_1 = require("./home-repository");
describe(home_repository_1.HomeRepository.name, () => {
    let homeRepository;
    beforeEach(() => {
        homeRepository = new home_repository_1.HomeRepository();
    });
    afterEach(() => {
        sinon_1.default.restore();
    });
    test('Query all approved homes', async () => {
        const homeDataModelMock = sinon_1.default.mock(home_1.default);
        home_1.default.isInitialized = true;
        homeDataModelMock.expects('findAll').once().returns([]);
        const homes = await homeRepository.getHomes();
        chai_1.assert.equal(homes.length, 0);
    });
});
