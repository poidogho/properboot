import { MigrationBuilder } from 'node-pg-migrate';

export const shorthands: any = undefined;

export const up = (pgm: MigrationBuilder) => {
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
