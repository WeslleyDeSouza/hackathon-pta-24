import { Body, Controller, Get, Put, UseGuards } from '@nestjs/common';
import { IUser, UserFacade } from '@hackathon-pta/api/model/user';
import { ApiTags } from '@nestjs/swagger';
import { CurrentTenant, CurrentUser, TenantMockGuard, UserMockGuard } from '@hackathon-pta/api/common';
import { ProjectDtoCreate } from '@hackathon-pta/api/model/project';

@Controller('user')
@ApiTags('User')
@UseGuards(UserMockGuard)
export class UserController {
  constructor(private readonly userService: UserFacade) {

  }
  @Get('')
  getCurrentUser(@CurrentUser()currentUser:IUser):IUser {
    return currentUser
  }

}
