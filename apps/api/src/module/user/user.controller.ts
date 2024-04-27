import { Controller, Get } from '@nestjs/common';
import {UserFacade} from "@hackathon-pta/api/model/user";

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserFacade) {

  }

  @Get('create')
  createUser() {

  }
}
