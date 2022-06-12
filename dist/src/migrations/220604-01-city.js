"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.up = exports.shorthands = void 0;
exports.shorthands = undefined;
const up = (pgm) => {
    pgm.createTable('City', {
        id: { type: 'uuid', primaryKey: true },
        name: { type: 'varchar(1000)', notNull: true },
        province: { type: 'varchar(1000)', notNull: true },
        population: { type: 'int', notNull: true },
        createdAt: {
            type: 'timestamp',
            default: pgm.func('current_timestamp')
        },
        updatedAt: { type: 'timestamp' },
        deletedAt: { type: 'timestamp' }
    });
};
exports.up = up;
