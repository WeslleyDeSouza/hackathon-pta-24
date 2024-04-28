import { Module } from "@nestjs/common";
import { DBUserConfig } from "./db";
import { TypeOrmModule } from "@nestjs/typeorm";
import { EntityClassOrSchema } from "@nestjs/typeorm/dist/interfaces/entity-class-or-schema.type";
import { UserFacade, UserStoryFacade } from "./facades";
import { UserBadgeAchievementFacade } from "./facades/user-badge-achievement.facade";
import { UserActivityFacade } from "./facades/user-activity.facade";
import { UserStoryEstimationFacade } from "./facades/user-story-estimation.facade";

@Module({
  controllers: [],
  providers: [
    UserFacade,
    UserStoryFacade,
    UserBadgeAchievementFacade,
    UserActivityFacade,
    UserStoryEstimationFacade,
  ],
  imports: [TypeOrmModule.forFeature(DBUserConfig.entities as EntityClassOrSchema[])],
  exports: [
    UserFacade,
    UserStoryFacade,
    UserBadgeAchievementFacade,
    UserActivityFacade,
    UserStoryEstimationFacade,
  ],
})
export class ApiModelUserModule {
  static dbConfig = DBUserConfig;
}
