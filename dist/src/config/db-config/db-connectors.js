"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pool = void 0;
const pg_1 = require("pg");
const config_1 = require("../config");
exports.pool = new pg_1.Pool({
    user: config_1.config.db.user,
    host: config_1.config.db.hostMaster,
    database: config_1.config.db.name,
    password: config_1.config.db.password,
    ssl: { rejectUnauthorized: false }
});
