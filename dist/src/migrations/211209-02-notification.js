"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.up = exports.shorthands = void 0;
exports.shorthands = undefined;
const up = (pgm) => {
    pgm.createTable('Notification', {
        id: { type: 'uuid', primaryKey: true },
        firstname: { type: 'varchar(100)', notNull: true },
        lastname: { type: 'varchar(100)', notNull: true },
        interest: { type: 'varchar(1000)', notNull: true },
        viewingTime: { type: 'date', notNull: true },
        confirmed: { type: 'boolean' },
        adminId: { type: 'uuid', references: 'User' },
        createdAt: {
            type: 'timestamp',
            default: pgm.func('current_timestamp')
        },
        updatedAt: { type: 'timestamp' },
        deletedAt: { type: 'timestamp' }
    });
};
exports.up = up;
