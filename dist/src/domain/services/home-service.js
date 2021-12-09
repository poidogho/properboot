"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeService = void 0;
const inversify_1 = require("inversify");
const types_1 = __importDefault(require("../../constants/types"));
let HomeService = class HomeService {
    constructor(homeRepository, homeImageRepository) {
        this.homeRepository = homeRepository;
        this.homeImageRepository = homeImageRepository;
    }
    async createHome(home) {
        const homeToCreate = await this.homeRepository.createHome(home);
        const homeImages = await this.homeImageRepository.createHomeImages(home.homeImages);
        const createdHome = homeToCreate
            .builder()
            .setHomeImages(homeImages)
            .build();
        return createdHome;
    }
    async getHome(homeId) {
        let homeWithImages;
        const home = await this.homeRepository.getHome(homeId);
        if (home) {
            const homeImages = await this.homeImageRepository.getHomeImages(homeId);
            homeWithImages = home.builder().setHomeImages(homeImages).build();
        }
        return home ? homeWithImages : undefined;
    }
    async getHomes() {
        const homes = await this.homeRepository.getHomes();
        return homes;
    }
    async updateHomeStatus(homeId, approved) {
        await this.homeRepository.updatehomeStatus(homeId, approved);
    }
};
HomeService = __decorate([
    (0, inversify_1.injectable)(),
    __param(0, (0, inversify_1.inject)(types_1.default.HomeRepository)),
    __param(1, (0, inversify_1.inject)(types_1.default.HomeImageRepository)),
    __metadata("design:paramtypes", [Object, Object])
], HomeService);
exports.HomeService = HomeService;
