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
exports.CreateUserRequest = void 0;
const class_validator_1 = require("class-validator");
const user_1 = require("../../../../domain/aggregates/user-aggregates/user");
const api_request_1 = require("../api-request");
const user_role_1 = require("../../../../domain/aggregates/user-aggregates/user-role");
const uuid_1 = require("uuid");
class CreateUserRequest extends api_request_1.APIRequest {
    constructor(req) {
        super();
        this.id = (0, uuid_1.v4)();
        this.firstname = req.body.firstname;
        this.lastname = req.body.lastname;
        this.othernames = req.body.othernames;
        this.email = req.body.email;
        this.password = req.body.password;
        this.role = req.body.role;
    }
    toDomain() {
        return new user_1.User({
            id: this.id,
            firstname: this.firstname,
            lastname: this.lastname,
            othernames: this.othernames,
            password: this.password,
            email: this.email,
            role: this.role
        });
    }
}
__decorate([
    (0, class_validator_1.IsDefined)(),
    (0, class_validator_1.IsUUID)('4'),
    __metadata("design:type", String)
], CreateUserRequest.prototype, "id", void 0);
__decorate([
    (0, class_validator_1.IsDefined)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateUserRequest.prototype, "firstname", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateUserRequest.prototype, "othernames", void 0);
__decorate([
    (0, class_validator_1.IsDefined)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateUserRequest.prototype, "lastname", void 0);
__decorate([
    (0, class_validator_1.IsDefined)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], CreateUserRequest.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsDefined)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateUserRequest.prototype, "password", void 0);
__decorate([
    (0, class_validator_1.IsDefined)(),
    (0, class_validator_1.IsEnum)(user_role_1.UserRole),
    __metadata("design:type", String)
], CreateUserRequest.prototype, "role", void 0);
exports.CreateUserRequest = CreateUserRequest;
