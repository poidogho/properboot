"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.randomPropertyType = exports.PropertyType = void 0;
var PropertyType;
(function (PropertyType) {
    PropertyType[PropertyType["detached"] = 0] = "detached";
    PropertyType[PropertyType["semi-detached"] = 1] = "semi-detached";
    PropertyType[PropertyType["condemonium"] = 2] = "condemonium";
    PropertyType[PropertyType["multi-plex"] = 3] = "multi-plex";
    PropertyType[PropertyType["townhouse"] = 4] = "townhouse";
})(PropertyType = exports.PropertyType || (exports.PropertyType = {}));
function randomPropertyType(anEnum) {
    const enumValues = Object.keys(anEnum)
        .map((n) => Number.parseInt(n))
        .filter((n) => !Number.isNaN(n));
    const randomIndex = Math.floor(Math.random() * enumValues.length);
    const randomEnumValue = enumValues[randomIndex];
    return randomEnumValue;
}
exports.randomPropertyType = randomPropertyType;
// how to call
// PropertyType[randomPropertyType(PropertyType)]
// const cities: City[] = [];
// provinces.forEach((province) => {
//   const numOfCity = Math.floor(Math.random() * (500 - 100 + 100)) + 100;
//   for (let i = 0; i < numOfCity; i++) {
//     cities.push({
//       id: UUIDV4(),
//       name: faker.address.city(),
//       province,
//       population: 99999
//     });
//   }
// });
// const dbCities = await CityDataModel.findAll();
// const properties: Property[] = [];
// for (let i = 0; i < dbCities.length; i++) {
//   const cityId = dbCities[i].dataValues.id;
//   const numOfProperties = Math.floor(Math.random() * (300 - 1 + 1)) + 1;
//   for (let x = 0; x < numOfProperties; x++) {
//     properties.push({
//       id: UUIDV4(),
//       cityId,
//       number: Math.floor(Math.random() * (2000 - 1 + 1)) + 1,
//       numOfRooms: Math.floor(Math.random() * (10 - 1)) + 1,
//       street: faker.address.street(),
//       type: PropertyType[randomPropertyType(PropertyType)],
//       sqrFtSize: Math.floor(Math.random() * (10000 - 1000)) + 1000,
//       buildYear: Math.floor(Math.random() * (2022 - 1980)) + 1980,
//       price: Math.floor(Math.random() * (10000000 - 300000)) + 300000
//     });
//   }
// }
// await PropertyDataModel.bulkCreate(properties);
