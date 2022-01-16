"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeReducer = void 0;
const types_1 = require("../actions/types");
const initialState = {
    home: null,
    homes: []
};
function HomeReducer(state = initialState, action) {
    switch (action.type) {
        case types_1.GET_HOMES:
            return {
                ...state,
                homes: action.payload
            };
        default:
            return state;
    }
}
exports.HomeReducer = HomeReducer;
