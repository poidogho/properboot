"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationBuilder = exports.Notification = void 0;
class Notification {
    constructor(parameter) {
        this.id = parameter.id;
        this.firstname = parameter.firstname;
        this.lastname = parameter.lastname;
        this.interest = parameter.interest;
        this.viewingTime = parameter.viewingTime;
        this.confirmed = parameter.confirmed;
        this.adminId = parameter.adminId;
    }
    builder() {
        return new NotificationBuilder(this);
    }
}
exports.Notification = Notification;
class NotificationBuilder {
    constructor(parameters) {
        this.parameters = { ...parameters };
    }
    setfirstname(firstname) {
        this.parameters.firstname = firstname;
        return this;
    }
    setLastname(lastname) {
        this.parameters.lastname = lastname;
        return this;
    }
    setInterest(interest) {
        this.parameters.interest = interest;
        return this;
    }
    setConfirmed(confirmed) {
        this.parameters.confirmed = confirmed;
        return this;
    }
    setAdminId(adminId) {
        this.parameters.adminId = adminId;
        return this;
    }
    build() {
        return new Notification(this.parameters);
    }
}
exports.NotificationBuilder = NotificationBuilder;
