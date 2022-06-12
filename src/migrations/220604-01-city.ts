import { MigrationBuilder } from 'node-pg-migrate';

export const shorthands: any = undefined;

export const up = (pgm: MigrationBuilder) => {
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
