import { Module } from '@nestjs/common';
import {DBUserConfig} from "./db";
import {TypeOrmModule} from "@nestjs/typeorm";
import {EntityClassOrSchema} from "@nestjs/typeorm/dist/interfaces/entity-class-or-schema.type";
import {UserFacade, UserStoryFacade} from "./facades";
import { UserBadgeAchievementFacade } from './facades/user-badge-achievement.facade';

@Module({
  controllers: [],
  providers: [
    UserFacade,
    UserStoryFacade,
    UserBadgeAchievementFacade
  ],
  imports:[
    TypeOrmModule.forFeature(DBUserConfig.entities as EntityClassOrSchema[])
  ],
  exports: [
    UserFacade,UserStoryFacade,UserBadgeAchievementFacade
  ],
})
export class ApiModelUserModule {
  static dbConfig = DBUserConfig
}
