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
var CityDataModel_1;
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const sequelize_1 = require("sequelize");
const property_1 = __importDefault(require("./property"));
let CityDataModel = CityDataModel_1 = class CityDataModel extends sequelize_typescript_1.Model {
    static fromDomain(city) {
        return new CityDataModel_1({
            id: city.id,
            name: city.name,
            province: city.province,
            population: city.population
        });
    }
};
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => property_1.default),
    __metadata("design:type", Array)
], CityDataModel.prototype, "properties", void 0);
__decorate([
    (0, sequelize_typescript_1.Default)(sequelize_1.UUIDV4),
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], CityDataModel.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.AllowNull)(false),
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], CityDataModel.prototype, "name", void 0);
__decorate([
    (0, sequelize_typescript_1.AllowNull)(false),
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], CityDataModel.prototype, "province", void 0);
__decorate([
    (0, sequelize_typescript_1.AllowNull)(false),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], CityDataModel.prototype, "population", void 0);
CityDataModel = CityDataModel_1 = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'City', timestamps: true, paranoid: true })
], CityDataModel);
exports.default = CityDataModel;
