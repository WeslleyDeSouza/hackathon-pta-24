import { Module } from '@nestjs/common';
import { ApiModelBadgeModule, BadgeFacade } from '@hackathon-pta/api/model/badge';
import { BadgeController } from './badge.controller';
import { DummyDataGenerator } from '../../common/_dummy-data';

@Module({
  imports: [
    ApiModelBadgeModule
  ],
  controllers: [BadgeController],
  providers: [],
})
export class BadgeModule {
  constructor(badgeFacade:BadgeFacade) {
    DummyDataGenerator.badgeGenerate(badgeFacade)
  }
}
