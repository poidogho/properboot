"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetHomesResponse = void 0;
class GetHomesResponse {
    constructor(id, price, address, sqrFtSize, description, images) {
        this.id = id;
        this.price = price;
        this.address = address;
        this.sqrFtSize = sqrFtSize;
        this.description = description;
        this.images = images;
    }
    static fromDomain(home) {
        return new GetHomesResponse(home.id, home.price, home.address, home.sqrFtSize, home.description, home.homeImages.map((image) => image.imageUrl));
    }
}
exports.GetHomesResponse = GetHomesResponse;
