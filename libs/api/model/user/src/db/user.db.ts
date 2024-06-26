import {Entity, Column, PrimaryGeneratedColumn, DataSourceOptions} from 'typeorm';
import {UserEntity} from "../entities";
import {UserStoryEstimationEntity} from "../entities/user-story-estimation.entity";
import {UserStoryEntity} from "../entities/user-story.entity";
import { UserBadgeAchievementEntity } from '../entities/user-badge-achievement.entity';
import { UserActivityEntity } from '../entities/user-activity.entity';

export const DBUserConfig:DataSourceOptions = {
  type: process.env['DB_TYPE'] as any,
  host: process.env['DB_HOST'] || 'localhost',
  port:  +(process.env['DB_PORT'] || 3306),
  username:  process.env['DB_USERNAME'],
  password:  process.env['DB_PASSWORD'] ,
  database:  process.env['DB_DATABASE'],
  entities: [UserEntity,UserStoryEntity,UserStoryEstimationEntity,UserBadgeAchievementEntity,UserActivityEntity],
  synchronize: true,
}
