import { Controller, Get } from '@nestjs/common';
import {UserFacade, UserStoryFacade} from "@hackathon-pta/api/model/user";
import {UserStoryCreate} from "../../../../../libs/api/model/user/src/dto";

@Controller('user-story')
export class UserStoryController {
  constructor(
    private readonly userService: UserFacade,
    private readonly userStoryService: UserStoryFacade
  ) {}

  @Get('create')
  createUser(story:UserStoryCreate) {

  }
}
