import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import {BadgeAchievementFacade, BadgeFacade} from "@hackathon-pta/api/model/badge";
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { CurrentUser, TenantMockGuard, UserMockGuard } from '@hackathon-pta/api/common';
import { IUser } from '@hackathon-pta/api/model/user';
import { BadgeAchievementEntity } from '../../../../../libs/api/model/badge/src/lib/entities/badge-achievement.entity';

@Controller('badge')
@ApiTags('Badge')
@UseGuards(UserMockGuard)
export class BadgeController {
  constructor(private readonly badgeService: BadgeFacade, private readonly badgeAchievementService: BadgeAchievementFacade) {}

  @Get()
  @ApiOkResponse({
    description: 'List Badge record',
    type: BadgeAchievementEntity,
    isArray:true
  })
  list(@CurrentUser() currentUser:IUser) {
    return this.badgeAchievementService.listByUserId(currentUser.userId);
  }

  @Get("user/:userId")
  @ApiOkResponse({
    description: 'The Badge record',
    type: BadgeAchievementEntity,
    isArray:true
  })
  listByUserId(@Param('id') userId: string) {
    return this.badgeAchievementService.listByUserId(userId);
  }

  @Get(':id')
  @ApiOkResponse({
    description: 'Get Badge record',
    type: BadgeAchievementEntity,
  })
  findOne(@Param('id') id: string) {
    return this.badgeService.findByBadgeId(id);
  }
}
