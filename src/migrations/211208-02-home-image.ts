import { MigrationBuilder } from 'node-pg-migrate';

export const shorthands: any = undefined;

export const up = (pgm: MigrationBuilder) => {
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
