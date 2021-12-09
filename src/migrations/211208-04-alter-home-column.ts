import { MigrationBuilder } from 'node-pg-migrate';

export const shorthands: any = undefined;

export const up = (pgm: MigrationBuilder) => {
  pgm.alterColumn('Home', 'description', {
    type: 'varchar(1000)',
    notNull: true
  });
};
