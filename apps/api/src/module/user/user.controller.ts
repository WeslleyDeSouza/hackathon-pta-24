import { Controller, Get } from '@nestjs/common';
import {UserFacade} from "@hackathon-pta/api/model/user";
import { ApiTags } from '@nestjs/swagger';

@Controller('user')
@ApiTags('User')
export class UserController {
  constructor(private readonly userService: UserFacade) {

  }


}
