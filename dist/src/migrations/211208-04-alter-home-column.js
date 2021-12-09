"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.up = exports.shorthands = void 0;
exports.shorthands = undefined;
const up = (pgm) => {
    pgm.alterColumn('Home', 'description', {
        type: 'varchar(1000)',
        notNull: true
    });
};
exports.up = up;
