"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeRepository = void 0;
const inversify_1 = require("inversify");
const home_1 = __importDefault(require("../db-models/home"));
const home_image_1 = __importDefault(require("../db-models/home-image"));
let HomeRepository = class HomeRepository {
    async createHome(home) {
        let homeDataModel = home_1.default.fromDomain(home);
        homeDataModel = await homeDataModel.save();
        return homeDataModel.toDomain();
    }
    async getHome(homeId) {
        const homeDataModel = await home_1.default.findOne({
            where: {
                id: homeId
            }
        });
        return homeDataModel.toDomain();
    }
    async getHomes() {
        const homeDataModels = await home_1.default.findAll({
            where: {
                approved: true
            },
            include: [home_image_1.default]
        });
        const homes = homeDataModels.map((home) => home.toDomain());
        return homes;
    }
    async updatehomeStatus(homeId, approved) {
        console.log('here');
        await home_1.default.update({ approved }, { where: { id: homeId } });
    }
};
HomeRepository = __decorate([
    (0, inversify_1.injectable)()
], HomeRepository);
exports.HomeRepository = HomeRepository;
