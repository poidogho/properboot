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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var HomeImageDataModel_1;
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const sequelize_1 = require("sequelize");
const home_1 = __importDefault(require("./home"));
let HomeImageDataModel = HomeImageDataModel_1 = class HomeImageDataModel extends sequelize_typescript_1.Model {
    static fromDomain(homeImage) {
        return new HomeImageDataModel_1({
            id: homeImage.id,
            homeId: homeImage.homeId,
            imageUrl: homeImage.imageUrl
        });
    }
    toDomain() {
        return {
            id: this.id,
            homeId: this.homeId,
            imageUrl: this.imageUrl
        };
    }
};
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => home_1.default),
    __metadata("design:type", home_1.default)
], HomeImageDataModel.prototype, "home", void 0);
__decorate([
    (0, sequelize_typescript_1.Default)(sequelize_1.UUIDV4),
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], HomeImageDataModel.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.AllowNull)(false),
    (0, sequelize_typescript_1.Column)({ type: sequelize_1.STRING }),
    (0, sequelize_typescript_1.ForeignKey)(() => home_1.default),
    __metadata("design:type", String)
], HomeImageDataModel.prototype, "homeId", void 0);
__decorate([
    (0, sequelize_typescript_1.AllowNull)(false),
    (0, sequelize_typescript_1.Column)({ type: sequelize_1.STRING }),
    __metadata("design:type", String)
], HomeImageDataModel.prototype, "imageUrl", void 0);
HomeImageDataModel = HomeImageDataModel_1 = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'HomeImage', timestamps: true, paranoid: true })
], HomeImageDataModel);
exports.default = HomeImageDataModel;
