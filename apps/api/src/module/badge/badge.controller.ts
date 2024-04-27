import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import {BadgeFacade} from "@hackathon-pta/api/model/badge";
import { ApiTags } from '@nestjs/swagger';
import { CurrentUser, TenantMockGuard, UserMockGuard } from '@hackathon-pta/api/common';
import { IUser } from '@hackathon-pta/api/model/user';

@Controller('badge')
@ApiTags('Badge')
@UseGuards(UserMockGuard)
export class BadgeController {
  constructor(private readonly badgeService: BadgeFacade) {}

  @Get()
  findFromUser(@CurrentUser() currentUser:IUser) {

  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.badgeService.findByBadgeId(id);
  }
}
