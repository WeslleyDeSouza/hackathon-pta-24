import { Body, Controller, Get, Patch, Put } from '@nestjs/common';
import { UserFacade, UserStoryFacade, UserStoryUpdate } from '@hackathon-pta/api/model/user';
import {UserStoryCreate} from "@hackathon-pta/api/model/user";
import {ApiTags} from "@nestjs/swagger";

@Controller('user-story')
@ApiTags('UserStory')
export class UserStoryController {
  constructor(
    private readonly userService: UserFacade,
    private readonly userStoryService: UserStoryFacade
  ) {}

  @Put('create')
  createUserStory(@Body()story:UserStoryCreate) {


  }

  @Patch('update')
  updateUserStory(@Body()story:UserStoryUpdate) {

  }
}
