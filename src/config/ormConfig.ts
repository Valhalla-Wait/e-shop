import * as dotenv from 'dotenv';
import { Injectable } from '@nestjs/common';
import { DataSource, DataSourceOptions } from 'typeorm';
import { TypeOrmOptionsFactory, TypeOrmModuleOptions } from '@nestjs/typeorm';

dotenv.config();

const config: DataSourceOptions = {
  type: 'postgres',

  host: process.env.POSTGRES_HOST,
  database: process.env.POSTGRES_DB,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,

  port: Number(process.env.POSTGRES_PORT || 5432),

  logging: false,
  synchronize: false,

  entities: ['dist/src/modules/**/*.entity.js'],
  migrations: ['dist/src/database/migrations/*.js'],
};

export const connectionSource = new DataSource(config);

@Injectable()
export default class TypeOrmConfigService implements TypeOrmOptionsFactory {
  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      ...config,
      migrationsRun: true,
      autoLoadEntities: true,
    };
  }
}
