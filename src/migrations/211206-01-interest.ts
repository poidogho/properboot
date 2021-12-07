import { MigrationBuilder } from 'node-pg-migrate';

export const shorthands: any = undefined;

export const up = (pgm: MigrationBuilder) => {
  pgm.createTable('Notification', {
    id: { type: 'uuid', primaryKey: true },
    firstname: { type: 'varchar(100)', notNull: true },
    lastname: { type: 'varchar(100)', notNull: true },
    interest: { type: 'varchar(1000)', notNull: true },
    confirmed: { type: 'boolean', notNull: true },
    adminId: { type: 'uuid', references: 'User' },
    createdAt: {
      type: 'timestamp',
      notNull: true,
      default: pgm.func('current_timestamp')
    },
    updatedAt: { type: 'timestamp' },
    deletedAt: { type: 'timestamp' }
  });
};
