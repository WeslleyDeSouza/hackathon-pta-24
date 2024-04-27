import { Controller, Get } from '@nestjs/common';
import {UserFacade, UserStoryFacade} from "@hackathon-pta/api/model/user";

@Controller('user-story')
export class UserController {
  constructor(
    private readonly userService: UserFacade,
    private readonly userStoryService: UserStoryFacade
  ) {

  }

  @Get('create')
  createUser() {

  }
}
