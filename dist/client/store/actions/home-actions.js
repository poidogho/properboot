"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHomes = void 0;
const utils_1 = require("../../utils");
const types_1 = require("./types");
// import { Home } from '../reducers/types';
const server = (0, utils_1.getServer)();
const getHomes = () => async (dispatch) => {
    await utils_1.axios
        .get(`${server}/homes`)
        .then((res) => {
        dispatch({
            type: types_1.GET_HOMES,
            payload: res.data
        });
    })
        .catch((err) => {
        dispatch({
            type: types_1.ERROR,
            payload: err
        });
    });
};
exports.getHomes = getHomes;
