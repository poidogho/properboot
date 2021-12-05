import { MigrationBuilder } from 'node-pg-migrate';

export const shorthands: any = undefined;

export const up = (pgm: MigrationBuilder) => {
  pgm.createTable('User', {
    id: { type: 'uuid', primaryKey: true },
    firstname: { type: 'varchar(100)', notNull: true },
    lastname: { type: 'varchar(100)', notNull: true },
    othernames: { type: 'varchar(255)', notNull: true },
    email: { type: 'varchar(255)', notNull: true },
    role: { type: 'varchar(100)' },
    createdAt: { type: 'timestamp', notNull: true },
    updatedAt: { type: 'timestamp' },
    deletedAt: { type: 'timestamp' }
  });

  pgm.createIndex('User', ['email'], {
    name: 'User_searchValues_idx'
  });
};
