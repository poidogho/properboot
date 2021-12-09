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
var HomeDataModel_1;
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const sequelize_1 = require("sequelize");
const user_1 = require("./user");
const home_image_1 = __importDefault(require("./home-image"));
const home_1 = require("../../domain/aggregates/home-aggregates/home");
let HomeDataModel = HomeDataModel_1 = class HomeDataModel extends sequelize_typescript_1.Model {
    static fromDomain(home) {
        return new HomeDataModel_1({
            id: home.id,
            authorId: home.authorId,
            name: home.name,
            price: home.price,
            address: home.address,
            sqrFtSize: home.sqrFtSize,
            description: home.description,
            homeImages: home.homeImages,
            approved: home.approved
        });
    }
    toDomain() {
        return new home_1.Home({
            id: this.id,
            authorId: this.authorId,
            name: this.name,
            price: this.price,
            address: this.address,
            sqrFtSize: this.sqrFtSize,
            description: this.description,
            homeImages: this.homeImages,
            approved: this.approved
        });
    }
};
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => home_image_1.default),
    __metadata("design:type", Array)
], HomeDataModel.prototype, "homeImages", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => user_1.UserDataModel),
    __metadata("design:type", user_1.UserDataModel)
], HomeDataModel.prototype, "user", void 0);
__decorate([
    (0, sequelize_typescript_1.Default)(sequelize_1.UUIDV4),
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], HomeDataModel.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => user_1.UserDataModel),
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], HomeDataModel.prototype, "authorId", void 0);
__decorate([
    (0, sequelize_typescript_1.AllowNull)(false),
    (0, sequelize_typescript_1.Column)({ type: sequelize_1.STRING }),
    __metadata("design:type", String)
], HomeDataModel.prototype, "name", void 0);
__decorate([
    (0, sequelize_typescript_1.AllowNull)(false),
    (0, sequelize_typescript_1.Column)({ type: sequelize_1.NUMBER }),
    __metadata("design:type", Number)
], HomeDataModel.prototype, "price", void 0);
__decorate([
    (0, sequelize_typescript_1.AllowNull)(false),
    (0, sequelize_typescript_1.Column)({ type: sequelize_1.STRING }),
    __metadata("design:type", String)
], HomeDataModel.prototype, "address", void 0);
__decorate([
    (0, sequelize_typescript_1.AllowNull)(false),
    (0, sequelize_typescript_1.Column)({ type: sequelize_1.NUMBER }),
    __metadata("design:type", Number)
], HomeDataModel.prototype, "sqrFtSize", void 0);
__decorate([
    (0, sequelize_typescript_1.AllowNull)(false),
    (0, sequelize_typescript_1.Column)({ type: sequelize_1.STRING }),
    __metadata("design:type", String)
], HomeDataModel.prototype, "description", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_1.BOOLEAN }),
    __metadata("design:type", Boolean)
], HomeDataModel.prototype, "approved", void 0);
HomeDataModel = HomeDataModel_1 = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'Home', timestamps: true, paranoid: true })
], HomeDataModel);
exports.default = HomeDataModel;
