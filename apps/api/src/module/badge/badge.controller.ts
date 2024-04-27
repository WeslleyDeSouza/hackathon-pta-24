import { Controller, Get, Param } from '@nestjs/common';
import {BadgeFacade} from "@hackathon-pta/api/model/badge";
import { ApiTags } from '@nestjs/swagger';

@Controller('badge')
@ApiTags('badge')
export class BadgeController {
  constructor(private readonly badgeService: BadgeFacade) {

  }

  @Get()
  findAll() {
    return this.badgeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.badgeService.findByBadgeId(id);
  }
}
