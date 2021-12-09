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
var UserDataModel_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDataModel = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const sequelize_1 = require("sequelize");
const home_1 = __importDefault(require("./home"));
const user_1 = require("../../domain/aggregates/user-aggregates/user");
const notification_1 = __importDefault(require("./notification"));
let UserDataModel = UserDataModel_1 = class UserDataModel extends sequelize_typescript_1.Model {
    static fromDomain(user) {
        return new UserDataModel_1({
            id: user.id,
            firstname: user.firstname,
            lastname: user.lastname,
            othernames: user.othernames,
            email: user.email,
            role: user.role,
            password: user.password
        });
    }
    toDomain() {
        return new user_1.User({
            id: this.id,
            firstname: this.firstname,
            lastname: this.lastname,
            othernames: this.othernames,
            email: this.email,
            password: this.password,
            role: this.role
        });
    }
};
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => home_1.default),
    __metadata("design:type", Array)
], UserDataModel.prototype, "homes", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => notification_1.default),
    __metadata("design:type", Array)
], UserDataModel.prototype, "notifications", void 0);
__decorate([
    (0, sequelize_typescript_1.Default)(sequelize_1.UUIDV4),
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], UserDataModel.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.AllowNull)(false),
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], UserDataModel.prototype, "firstname", void 0);
__decorate([
    (0, sequelize_typescript_1.AllowNull)(false),
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], UserDataModel.prototype, "lastname", void 0);
__decorate([
    (0, sequelize_typescript_1.AllowNull)(true),
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], UserDataModel.prototype, "othernames", void 0);
__decorate([
    (0, sequelize_typescript_1.AllowNull)(false),
    sequelize_typescript_1.IsEmail,
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], UserDataModel.prototype, "email", void 0);
__decorate([
    (0, sequelize_typescript_1.AllowNull)(false),
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], UserDataModel.prototype, "password", void 0);
__decorate([
    (0, sequelize_typescript_1.AllowNull)(false),
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], UserDataModel.prototype, "role", void 0);
UserDataModel = UserDataModel_1 = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'User', paranoid: true, timestamps: true })
], UserDataModel);
exports.UserDataModel = UserDataModel;
exports.default = UserDataModel;
