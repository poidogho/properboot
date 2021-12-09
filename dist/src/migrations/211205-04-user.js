"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.up = exports.shorthands = void 0;
exports.shorthands = undefined;
const up = (pgm) => {
    pgm.createTable('User', {
        id: { type: 'uuid', primaryKey: true },
        firstname: { type: 'varchar(100)', notNull: true },
        lastname: { type: 'varchar(100)', notNull: true },
        othernames: { type: 'varchar(100)' },
        email: { type: 'varchar(255)', notNull: true },
        role: { type: 'varchar(100)' },
        password: { type: 'varchar(255)', notNull: true },
        createdAt: { type: 'timestamp' },
        updatedAt: { type: 'timestamp' },
        deletedAt: { type: 'timestamp' }
    });
    pgm.createIndex('User', ['email'], {
        name: 'User_searchValues_idx'
    });
};
exports.up = up;
