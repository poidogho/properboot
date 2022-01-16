"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const redux_1 = require("redux");
const home_reducer_1 = require("./home-reducer");
const rootReducer = (0, redux_1.combineReducers)({
    homes: home_reducer_1.HomeReducer
});
exports.default = rootReducer;
