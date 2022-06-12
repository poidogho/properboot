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
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const sequelize_1 = require("sequelize");
const city_1 = __importDefault(require("./city"));
let PropertyDataModel = class PropertyDataModel extends sequelize_typescript_1.Model {
};
__decorate([
    (0, sequelize_typescript_1.Default)(sequelize_1.UUIDV4),
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], PropertyDataModel.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => city_1.default),
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], PropertyDataModel.prototype, "cityId", void 0);
__decorate([
    (0, sequelize_typescript_1.AllowNull)(false),
    (0, sequelize_typescript_1.Column)({ type: sequelize_1.NUMBER }),
    __metadata("design:type", Number)
], PropertyDataModel.prototype, "numOfRooms", void 0);
__decorate([
    (0, sequelize_typescript_1.AllowNull)(false),
    (0, sequelize_typescript_1.Column)({ type: sequelize_1.NUMBER }),
    __metadata("design:type", Number)
], PropertyDataModel.prototype, "number", void 0);
__decorate([
    (0, sequelize_typescript_1.AllowNull)(false),
    (0, sequelize_typescript_1.Column)({ type: sequelize_1.NUMBER }),
    __metadata("design:type", Number)
], PropertyDataModel.prototype, "price", void 0);
__decorate([
    (0, sequelize_typescript_1.AllowNull)(false),
    (0, sequelize_typescript_1.Column)({ type: sequelize_1.STRING }),
    __metadata("design:type", String)
], PropertyDataModel.prototype, "street", void 0);
__decorate([
    (0, sequelize_typescript_1.AllowNull)(false),
    (0, sequelize_typescript_1.Column)({ type: sequelize_1.NUMBER }),
    __metadata("design:type", Number)
], PropertyDataModel.prototype, "sqrFtSize", void 0);
__decorate([
    (0, sequelize_typescript_1.AllowNull)(false),
    (0, sequelize_typescript_1.Column)({ type: sequelize_1.STRING }),
    __metadata("design:type", String)
], PropertyDataModel.prototype, "type", void 0);
__decorate([
    (0, sequelize_typescript_1.AllowNull)(false),
    (0, sequelize_typescript_1.Column)({ type: sequelize_1.NUMBER }),
    __metadata("design:type", Number)
], PropertyDataModel.prototype, "buildYear", void 0);
PropertyDataModel = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'Property', timestamps: true, paranoid: true })
], PropertyDataModel);
exports.default = PropertyDataModel;
