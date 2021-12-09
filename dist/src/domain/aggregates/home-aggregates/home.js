"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeBuilder = exports.Home = void 0;
class Home {
    constructor(parameters) {
        this.id = parameters.id;
        this.authorId = parameters.authorId;
        this.name = parameters.name;
        this.price = parameters.price;
        this.address = parameters.address;
        this.sqrFtSize = parameters.sqrFtSize;
        this.description = parameters.description;
        this.homeImages = parameters.homeImages;
        this.approved = parameters.approved;
    }
    builder() {
        return new HomeBuilder(this);
    }
}
exports.Home = Home;
class HomeBuilder {
    constructor(parameters) {
        this.parameters = { ...parameters };
    }
    setId(id) {
        this.parameters.id = id;
        return this;
    }
    setName(name) {
        this.parameters.name = name;
        return this;
    }
    setPrice(price) {
        this.parameters.price = price;
        return this;
    }
    setSqrFtSize(sqrFtSize) {
        this.parameters.sqrFtSize = sqrFtSize;
        return this;
    }
    setDescription(description) {
        this.parameters.description = description;
        return this;
    }
    setHomeImages(homeImages) {
        this.parameters.homeImages = homeImages;
        return this;
    }
    setApproved(approved) {
        this.parameters.approved = approved;
        return this;
    }
    build() {
        return new Home(this.parameters);
    }
}
exports.HomeBuilder = HomeBuilder;
