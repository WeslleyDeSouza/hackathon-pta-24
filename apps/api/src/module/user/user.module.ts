import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import {ApiModelUserModule} from "@hackathon-pta/api/model/user";
import {UserStoryController} from "./user-story.controller";

@Module({
  imports: [
    ApiModelUserModule
  ],
  controllers: [UserController,UserStoryController],
  providers: [],
})
export class UserModule {
  constructor() {
  }
}
