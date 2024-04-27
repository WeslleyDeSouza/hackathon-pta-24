import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { ApiModelUserModule, UserBadgeAchievementFacade, UserFacade, UserActivityFacade } from '@hackathon-pta/api/model/user';
import {UserStoryController} from "./user-story.controller";
import { DummyDataGenerator } from '../../common/_dummy-data';

@Module({
  imports: [
    ApiModelUserModule
  ],
  controllers: [UserController,UserStoryController],
  providers: [],
})
export class UserModule {
  constructor(facade:UserFacade, achievementFacade: UserBadgeAchievementFacade, activityFacade: UserActivityFacade) {
    DummyDataGenerator.userGenerate(facade);
    
    DummyDataGenerator.achievementGenerate(achievementFacade);
    DummyDataGenerator.userActivityGenerate(activityFacade);
  }
}
