import {Entity, Column, PrimaryGeneratedColumn, DataSourceOptions} from 'typeorm';
import {BadgeEntity} from "../entities";
import { BadgeAchievementEntity } from '../entities/badge-achievement.entity';

export const DBBadgeConfig:DataSourceOptions = {
  type: process.env['DB_TYPE'] as any,
  host: process.env['DB_HOST'] || 'localhost',
  port:  +(process.env['DB_PORT'] || 3306),
  username:  process.env['DB_USERNAME'],
  password:  process.env['DB_PASSWORD'] ,
  database:  process.env['DB_DATABASE'],
  entities: [BadgeEntity, BadgeAchievementEntity],
  synchronize: true,
}
