import { Controller, Get, UseGuards } from '@nestjs/common';
import {UserFacade} from "@hackathon-pta/api/model/user";
import { ApiTags } from '@nestjs/swagger';
import { TenantMockGuard, UserMockGuard } from '@hackathon-pta/api/common';

@Controller('user')
@ApiTags('User')
@UseGuards(UserMockGuard)
export class UserController {
  constructor(private readonly userService: UserFacade) {

  }


}
