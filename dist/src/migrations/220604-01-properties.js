"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.up = exports.shorthands = void 0;
exports.shorthands = undefined;
const up = (pgm) => {
    pgm.createTable('Property', {
        id: { type: 'uuid', primaryKey: true },
        cityId: { type: 'uuid', references: 'City', notNull: true },
        number: { type: 'int', notNull: true },
        street: { type: 'varchar(1000)', notNull: true },
        type: { type: 'varchar(1000)', notNull: true },
        numOfRooms: { type: 'int', notNull: true },
        sqrFtSize: { type: 'int', notNull: true },
        buildYear: { type: 'int', notNull: true },
        price: { type: 'int', notNull: true },
        createdAt: {
            type: 'timestamp',
            default: pgm.func('current_timestamp')
        },
        updatedAt: { type: 'timestamp' },
        deletedAt: { type: 'timestamp' }
    });
};
exports.up = up;
