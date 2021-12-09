"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const { PORT, POSTGRES_DATABASE, POSTGRES_HOST, POSTGRES_PORT, POSTGRES_USER, POSTGRES_PASSWORD, POSTGRES_MIN_CONNS, POSTGRES_MAX_CONNS } = process.env;
exports.config = Object.freeze({
    port: Number(PORT || 30082),
    jwtSecret: 'properboot',
    dbMigrate: true,
    db: {
        name: POSTGRES_DATABASE || 'd52lt01kch9i0n',
        port: Number(POSTGRES_PORT || 5432),
        user: POSTGRES_USER || 'bunecpcawvhrvr',
        password: POSTGRES_PASSWORD ||
            'ef20cd654b0e9c212ab685cd16b7d64c214d4c6b82005b8f5ded64a80057a39e',
        minConnections: Number(POSTGRES_MIN_CONNS || 0),
        maxConnections: Number(POSTGRES_MAX_CONNS || 5),
        hostMaster: POSTGRES_HOST || 'ec2-3-230-219-251.compute-1.amazonaws.com'
    }
});
