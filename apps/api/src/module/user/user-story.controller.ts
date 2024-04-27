import {Body, Controller, Get} from '@nestjs/common';
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

  @Get('create')
  createUserStory(@Body()story:UserStoryCreate) {

  }

  @Get('create')
  updateUserStory(@Body()story:UserStoryUpdate) {

  }
}
