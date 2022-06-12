"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
require("./application/controllers/user-controllers");
require("./application/controllers/home-controller");
require("./application/controllers/auth-controller");
require("./application/controllers/notification-controller");
const express_1 = __importDefault(require("express"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const sequelize_typescript_1 = require("sequelize-typescript");
const inversify_express_utils_1 = require("inversify-express-utils");
const yamljs_1 = __importDefault(require("yamljs"));
const path_1 = __importDefault(require("path"));
const app_root_path_1 = __importDefault(require("app-root-path"));
const cors_1 = __importDefault(require("cors"));
const inversify_config_1 = require("./config/inversify-config");
const http_status_codes_1 = require("http-status-codes");
const node_pg_migrate_1 = __importDefault(require("node-pg-migrate"));
const config_1 = require("./config/config");
const db_connectors_1 = require("./config/db-config/db-connectors");
// import { v4 as UUIDV4 } from 'uuid';
// import { City } from './domain/aggregates/city-aggregates/city';
// import { faker } from '@faker-js/faker';
// import {
//   Property,
//   PropertyType,
//   randomPropertyType
// } from './domain/aggregates/property-aggregates/property';
// import CityDataModel from './infrastructure/db-models/city';
// import PropertyDataModel from './infrastructure/db-models/property';
const openApi = yamljs_1.default.load(app_root_path_1.default + '/swagger.yml');
const initializeDb = () => {
    new sequelize_typescript_1.Sequelize({
        database: config_1.config.db.name,
        dialect: 'postgres',
        username: config_1.config.db.user,
        password: config_1.config.db.password,
        host: config_1.config.db.hostMaster,
        storage: ':memory:',
        dialectOptions: {
            ssl: {
                rejectUnauthorized: false
            }
        },
        models: [path_1.default.join(__dirname, './infrastructure/db-models/')]
    });
};
const migrateDB = async () => {
    await (0, node_pg_migrate_1.default)({
        migrationsTable: 'pg_migrate',
        dir: path_1.default.join(__dirname, './migrations'),
        direction: 'up',
        count: Infinity,
        singleTransaction: true,
        databaseUrl: {
            user: config_1.config.db.user,
            database: config_1.config.db.name,
            password: config_1.config.db.password,
            port: config_1.config.db.port,
            host: config_1.config.db.hostMaster,
            ssl: { rejectUnauthorized: false }
        }
    });
};
const dbConnect = () => {
    db_connectors_1.pool.connect((err) => {
        if (err) {
            console.error(err);
            throw new Error(err.message);
        }
        console.log('DB Connected');
    });
};
const initializeServer = () => {
    const server = new inversify_express_utils_1.InversifyExpressServer(inversify_config_1.container);
    server.setConfig((app) => {
        app.use(express_1.default.urlencoded({ extended: true }));
        app.use(express_1.default.json({ limit: '5mb' }));
        app.use((0, cors_1.default)());
        app.use('/api-docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(openApi));
    });
    return server;
};
const start = async () => {
    inversify_config_1.appContainer.initializeBindings();
    const server = initializeServer();
    initializeDb();
    if (config_1.config.dbMigrate) {
        await migrateDB();
    }
    dbConnect();
    const app = server.build();
    app.get('/healthz', (_, res) => {
        res.sendStatus(http_status_codes_1.StatusCodes.OK);
    });
    const startMessage = `App is listening at ${config_1.config.port} in development mode`;
    app.listen(config_1.config.port, () => console.log(startMessage));
};
start().catch((err) => {
    console.error(err);
    throw err;
});
