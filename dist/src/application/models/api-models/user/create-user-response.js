"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserResponse = void 0;
class CreateUserResponse {
    constructor(user) {
        this.id = user.id;
        this.email = user.email;
        this.firstname = user.firstname;
        this.lastname = user.lastname;
    }
    static fromDomain(user) {
        return new CreateUserResponse(user);
    }
}
exports.CreateUserResponse = CreateUserResponse;
