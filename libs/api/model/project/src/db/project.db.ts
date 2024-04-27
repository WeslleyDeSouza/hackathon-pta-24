import {Entity, Column, PrimaryGeneratedColumn, DataSourceOptions} from 'typeorm';
import {ProjectEntity} from "../entities";

export const DBUserConfig:DataSourceOptions = {
  type: process.env['DB_TYPE'] as any,
  host: process.env['DB_HOST'] || 'localhost',
  port:  +(process.env['DB_PORT'] || 3306),
  username:  process.env['DB_USERNAME'],
  password:  process.env['DB_PASSWORD'] ,
  database:  process.env['DB_DATABASE'],
  entities: [ProjectEntity],
  synchronize: true,
}
