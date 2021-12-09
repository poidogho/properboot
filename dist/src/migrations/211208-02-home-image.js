"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.up = exports.shorthands = void 0;
exports.shorthands = undefined;
const up = (pgm) => {
    pgm.createTable('HomeImage', {
        id: { type: 'uuid', primaryKey: true },
        homeId: { type: 'uuid', references: 'Home', notNull: true },
        imageUrl: { type: 'varchar(100)', notNull: true },
        createdAt: {
            type: 'timestamp',
            default: pgm.func('current_timestamp')
        },
        updatedAt: { type: 'timestamp' },
        deletedAt: { type: 'timestamp' }
    });
};
exports.up = up;
