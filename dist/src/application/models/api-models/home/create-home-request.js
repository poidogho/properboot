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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateHomeRequest = exports.HomeImage = void 0;
const class_validator_1 = require("class-validator");
const home_1 = require("../../../../domain/aggregates/home-aggregates/home");
const api_request_1 = require("../api-request");
const uuid_1 = require("uuid");
class HomeImage {
    constructor(id, homeId, imageUrl) {
        this.id = id;
        this.homeId = homeId;
        this.imageUrl = imageUrl;
    }
}
__decorate([
    (0, class_validator_1.IsDefined)(),
    (0, class_validator_1.IsUUID)('4'),
    __metadata("design:type", String)
], HomeImage.prototype, "id", void 0);
__decorate([
    (0, class_validator_1.IsDefined)(),
    (0, class_validator_1.IsUUID)('4'),
    __metadata("design:type", String)
], HomeImage.prototype, "homeId", void 0);
__decorate([
    (0, class_validator_1.IsDefined)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], HomeImage.prototype, "imageUrl", void 0);
exports.HomeImage = HomeImage;
class CreateHomeRequest extends api_request_1.APIRequest {
    constructor(req) {
        super();
        const { name, price, sqrtFtSize, description, homeImages, address } = req.body;
        this.id = (0, uuid_1.v4)();
        this.authorId = req.user.id;
        this.name = name;
        this.price = price;
        this.address = address;
        this.sqrFtSize = sqrtFtSize;
        this.description = description;
        this.images = homeImages;
        this.homeImages = this.images.map((image) => new HomeImage((0, uuid_1.v4)(), this.id, image));
    }
    toDomain() {
        return new home_1.Home({
            id: this.id,
            name: this.name,
            authorId: this.authorId,
            price: this.price,
            sqrFtSize: this.sqrFtSize,
            description: this.description,
            address: this.address,
            homeImages: this.homeImages
        });
    }
}
__decorate([
    (0, class_validator_1.IsDefined)(),
    (0, class_validator_1.IsUUID)('4'),
    __metadata("design:type", String)
], CreateHomeRequest.prototype, "id", void 0);
__decorate([
    (0, class_validator_1.IsDefined)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateHomeRequest.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsDefined)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateHomeRequest.prototype, "authorId", void 0);
__decorate([
    (0, class_validator_1.IsDefined)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateHomeRequest.prototype, "price", void 0);
__decorate([
    (0, class_validator_1.IsDefined)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateHomeRequest.prototype, "address", void 0);
__decorate([
    (0, class_validator_1.IsDefined)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateHomeRequest.prototype, "sqrFtSize", void 0);
__decorate([
    (0, class_validator_1.IsDefined)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateHomeRequest.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsDefined)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ArrayMinSize)(1),
    __metadata("design:type", Array)
], CreateHomeRequest.prototype, "images", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.ValidateNested)(),
    __metadata("design:type", Array)
], CreateHomeRequest.prototype, "homeImages", void 0);
exports.CreateHomeRequest = CreateHomeRequest;
