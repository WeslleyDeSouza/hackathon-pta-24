import { Module } from "@nestjs/common";
import { UserController } from "./user.controller";
import {
  ApiModelUserModule,
  UserActivityFacade,
  UserBadgeAchievementFacade,
  UserFacade,
  UserStoryFacade,
} from "@hackathon-pta/api/model/user";
import { UserStoryController } from "./user-story.controller";
import { DummyDataGenerator } from "../../common/_dummy-data";

@Module({
  imports: [ApiModelUserModule],
  controllers: [UserController, UserStoryController],
  providers: [],
})
export class UserModule {
  constructor(
    userStoryFacade: UserStoryFacade,
    facade: UserFacade,
    achievementFacade: UserBadgeAchievementFacade,
    activityFacade: UserActivityFacade
  ) {
    DummyDataGenerator.userGenerate(facade).then(() => {
      DummyDataGenerator.userStoryGenerate(userStoryFacade);
      DummyDataGenerator.achievementGenerate(achievementFacade);
      DummyDataGenerator.userActivityGenerate(activityFacade);
    });
  }
}
