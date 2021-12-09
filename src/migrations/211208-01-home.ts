import { MigrationBuilder } from 'node-pg-migrate';

export const shorthands: any = undefined;

export const up = (pgm: MigrationBuilder) => {
  pgm.createTable('Home', {
    id: { type: 'uuid', primaryKey: true },
    authorId: { type: 'uuid', references: 'User', notNull: true },
    name: { type: 'varchar(100)', notNull: true },
    price: { type: 'int', notNull: true },
    address: { type: 'varchar(1000)', notNull: true },
    sqrFtSize: { type: 'int', notNull: true },
    decription: { type: 'int', notNull: true },
    approved: { type: 'boolean' },
    createdAt: {
      type: 'timestamp',
      default: pgm.func('current_timestamp')
    },
    updatedAt: { type: 'timestamp' },
    deletedAt: { type: 'timestamp' }
  });
};
