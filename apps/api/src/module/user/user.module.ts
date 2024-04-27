import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { ApiModelUserModule, UserFacade } from '@hackathon-pta/api/model/user';
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
  constructor(facade:UserFacade) {
    DummyDataGenerator.userGenerate(facade)
  }
}
