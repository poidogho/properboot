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
exports.HomeImageRepository = void 0;
const inversify_1 = require("inversify");
const home_image_1 = __importDefault(require("../db-models/home-image"));
let HomeImageRepository = class HomeImageRepository {
    async createHomeImages(homeImages) {
        const homeImagesDataModel = await home_image_1.default.bulkCreate(homeImages.map((homeImage) => home_image_1.default.fromDomain(homeImage).toJSON()));
        return homeImagesDataModel.map((homeImage) => homeImage.toDomain());
    }
    async getHomeImages(homeId) {
        const homeImagesDataModels = await home_image_1.default.findAll({
            where: { homeId }
        });
        const homeImages = homeImagesDataModels.map((homeImage) => homeImage.toDomain());
        return homeImages;
    }
};
HomeImageRepository = __decorate([
    (0, inversify_1.injectable)()
], HomeImageRepository);
exports.HomeImageRepository = HomeImageRepository;
