"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.up = exports.shorthands = void 0;
exports.shorthands = undefined;
const up = (pgm) => {
    pgm.dropTable('Notification', {
        cascade: true
    });
};
exports.up = up;
