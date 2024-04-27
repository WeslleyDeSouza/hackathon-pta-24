import { Module } from '@nestjs/common';
import { ApiModelBadgeModule } from '@hackathon-pta/api/model/badge';
import { BadgeController } from './badge.controller';

@Module({
  imports: [
    ApiModelBadgeModule
  ],
  controllers: [BadgeController],
  providers: [],
})
export class BadgeModule {
  constructor() {
  }
}
