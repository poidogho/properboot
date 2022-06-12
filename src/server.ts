import 'reflect-metadata';
import './application/controllers/user-controllers';
import './application/controllers/home-controller';
import './application/controllers/auth-controller';
import './application/controllers/notification-controller';

import Express from 'express';
import swaggerUi from 'swagger-ui-express';
import { Sequelize } from 'sequelize-typescript';
import { InversifyExpressServer } from 'inversify-express-utils';
import YAML from 'yamljs';
import Path from 'path';
import appRoot from 'app-root-path';
import cors from 'cors';
import { appContainer, container } from './config/inversify-config';
import { StatusCodes } from 'http-status-codes';
import pgMigrate from 'node-pg-migrate';
import { config } from './config/config';
import { pool } from './config/db-config/db-connectors';
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

const openApi = YAML.load(appRoot + '/swagger.yml');

const initializeDb = () => {
  new Sequelize({
    database: config.db.name,
    dialect: 'postgres',
    username: config.db.user,
    password: config.db.password,
    host: config.db.hostMaster,
    storage: ':memory:',
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false
      }
    },
    models: [Path.join(__dirname, './infrastructure/db-models/')]
  });
};

const migrateDB = async () => {
  await pgMigrate({
    migrationsTable: 'pg_migrate',
    dir: Path.join(__dirname, './migrations'),
    direction: 'up',
    count: Infinity,
    singleTransaction: true,
    databaseUrl: {
      user: config.db.user,
      database: config.db.name,
      password: config.db.password,
      port: config.db.port,
      host: config.db.hostMaster,
      ssl: { rejectUnauthorized: false }
    }
  });
};

const dbConnect = () => {
  pool.connect((err) => {
    if (err) {
      console.error(err);
      throw new Error(err.message);
    }
    console.log('DB Connected');
  });
};

const initializeServer = () => {
  const server = new InversifyExpressServer(container);

  server.setConfig((app) => {
    app.use(Express.urlencoded({ extended: true }));
    app.use(Express.json({ limit: '5mb' }));
    app.use(cors());
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(openApi));
  });

  return server;
};

const start = async () => {
  appContainer.initializeBindings();
  const server = initializeServer();

  initializeDb();

  if (config.dbMigrate) {
    await migrateDB();
  }
  dbConnect();

  const app = server.build();

  app.get('/healthz', (_, res) => {
    res.sendStatus(StatusCodes.OK);
  });

  const startMessage = `App is listening at ${config.port} in development mode`;
  app.listen(config.port, () => console.log(startMessage));
};

start().catch((err) => {
  console.error(err);
  throw err;
});
