import { ConnectionOptions } from 'typeorm';

export const appConfig = {
  HOST: process.env.HOST || 'localhost',
  PORT: process.env.PORT || '3000',
};

export const dbConnectionConfig: ConnectionOptions = {
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT) || 5432,
  username: process.env.DB_USERNAME || 'postgres',
  password: process.env.DB_PASSWORD || 'postgres',
  database: process.env.DB_NAME || 'lectorium',
};