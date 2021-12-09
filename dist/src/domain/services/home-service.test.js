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
const home_repository_1 = require("../../infrastructure/repository/home-repository");
const home_image_repository_1 = require("../../infrastructure/repository/home-image-repository");
const home_1 = require("../aggregates/home-aggregates/home");
const home_service_1 = require("./home-service");
chai_1.default.use(sinon_chai_1.default);
chai_1.default.use(chai_as_promised_1.default);
describe(home_service_1.HomeService.name, () => {
    let homeRepositoryMock;
    let homeImageRepositoryMock;
    let homeService;
    let home;
    let homeImage1;
    let homeImage2;
    beforeEach(() => {
        homeRepositoryMock = Typemoq.Mock.ofType(home_repository_1.HomeRepository);
        homeImageRepositoryMock = Typemoq.Mock.ofType(home_image_repository_1.HomeImageRepository);
        homeService = new home_service_1.HomeService(homeRepositoryMock.object, homeImageRepositoryMock.object);
        homeImage1 = {
            imageUrl: 'imegeUrl'
        };
        homeImage2 = {
            imageUrl: 'imegeUrl'
        };
        home = new home_1.Home({
            name: 'new home',
            price: 350000,
            address: '200 toronto, toronto',
            sqrFtSize: 4000,
            authorId: 'dgdfg',
            description: 'new home',
            homeImages: [homeImage1, homeImage2]
        });
    });
    afterEach(() => {
        homeRepositoryMock.verifyAll();
        homeImageRepositoryMock.verifyAll();
        sinon_1.default.restore();
    });
    describe('get homes', () => {
        test('get notifications', () => {
            homeRepositoryMock
                .setup((mock) => mock.getHomes())
                .verifiable(Typemoq.Times.once());
            const promise = homeService.getHomes();
            return (0, chai_1.expect)(promise).to.be.eventually.be.fulfilled;
        });
    });
    describe('get a home', () => {
        test('get a home', () => {
            homeRepositoryMock
                .setup((mock) => mock.getHome(home.id))
                .returns(async () => home)
                .verifiable(Typemoq.Times.once());
            homeImageRepositoryMock
                .setup((mock) => mock.getHomeImages(home.id))
                .returns(async () => [homeImage1, homeImage2])
                .verifiable(Typemoq.Times.once());
            const promise = homeService.getHome(home.id);
            return (0, chai_1.expect)(promise).to.be.eventually.be.fulfilled;
        });
    });
    describe('create a home', () => {
        test('create a home', () => {
            homeRepositoryMock
                .setup((mock) => mock.createHome(home))
                .returns(async () => home)
                .verifiable(Typemoq.Times.once());
            homeImageRepositoryMock
                .setup((mock) => mock.createHomeImages(home.homeImages))
                .returns(async () => home.homeImages)
                .verifiable(Typemoq.Times.once());
            const promise = homeService.createHome(home);
            return (0, chai_1.expect)(promise).to.be.eventually.be.fulfilled;
        });
    });
    describe('update status', () => {
        test('update Status of a home', () => {
            homeRepositoryMock
                .setup((mock) => mock.updatehomeStatus(home.id, true))
                .verifiable(Typemoq.Times.once());
            const promise = homeService.updateHomeStatus(home.id, true);
            return (0, chai_1.expect)(promise).to.be.eventually.be.fulfilled;
        });
    });
});
