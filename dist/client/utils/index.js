"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.env = exports.axios = exports.getServer = void 0;
const axios_1 = __importDefault(require("axios"));
exports.axios = axios_1.default;
const env = process.env.NODE_ENV;
exports.env = env;
const getServer = () => {
    return env === 'development'
        ? 'http://localhost:30081'
        : 'https://dynaboot.herokuapp.com';
};
exports.getServer = getServer;
