import { Controller, Get, Param, Query, UseGuards } from '@nestjs/common';
import {BadgeAchievementFacade, BadgeFacade, BadgeUserAchievementDtoResponse} from "@hackathon-pta/api/model/badge";
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { CurrentUser, TenantMockGuard, UserMockGuard } from '@hackathon-pta/api/common';
import { IUser } from '@hackathon-pta/api/model/user';
import { BadgeEntity } from 'libs/api/model/badge/src/lib/entities';

@Controller('badge')
@ApiTags('Badge')
@UseGuards(UserMockGuard)
export class BadgeController {
  constructor(private readonly badgeService: BadgeFacade, private readonly badgeAchievementService: BadgeAchievementFacade) {}

  @Get()
  @ApiOkResponse({
    description: 'List Badge record',
    type: BadgeUserAchievementDtoResponse,
    isArray:true
  })
  list(@CurrentUser() currentUser:IUser) {
    return this.badgeAchievementService.listByUserId(currentUser.userId);
  }

  @Get("user/:userId")
  @ApiOkResponse({
    description: 'The Badge record',
    type: BadgeUserAchievementDtoResponse,
    isArray:true
  })
  listByUserId(@Param('userId') userId: string) {
    return this.badgeAchievementService.listByUserId(userId);
  }

  @Get(':id')
  @ApiOkResponse({
    description: 'Get Badge record',
    type: BadgeEntity,
  })
  findOne(@Param('id') id: string) {
    return this.badgeService.findByBadgeId(id);
  }
}
