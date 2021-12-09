"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserBuilder = exports.User = void 0;
class User {
    constructor(parameter) {
        this.id = parameter.id;
        this.firstname = parameter.firstname;
        this.lastname = parameter.lastname;
        this.othernames = parameter.othernames;
        this.email = parameter.email;
        this.password = parameter.password;
        this.role = parameter.role;
    }
    builder() {
        return new UserBuilder(this);
    }
}
exports.User = User;
class UserBuilder {
    constructor(parameters) {
        this.parameters = { ...parameters };
    }
    setId(id) {
        this.parameters.id = id;
        return this;
    }
    setfirstname(firstname) {
        this.parameters.firstname = firstname;
        return this;
    }
    setLastname(lastname) {
        this.parameters.lastname = lastname;
        return this;
    }
    setEmail(email) {
        this.parameters.email = email;
        return this;
    }
    setPassword(password) {
        this.parameters.password = password;
        return this;
    }
    setRole(role) {
        this.parameters.role = role;
        return this;
    }
    build() {
        return new User(this.parameters);
    }
}
exports.UserBuilder = UserBuilder;
