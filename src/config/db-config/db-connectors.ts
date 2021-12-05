import { Pool } from 'pg';
import { config } from '../config';

export const pool = new Pool({
  user: config.db.user,
  host: config.db.hostMaster,
  database: config.db.name,
  password: config.db.password,
  ssl: { rejectUnauthorized: false }
});
