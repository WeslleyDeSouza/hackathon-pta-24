import { Module } from '@nestjs/common';
import { ApiModelTenantModule, TenantFacade } from '@hackathon-pta/api/model/tenant';

@Module({
  imports: [
    ApiModelTenantModule
  ],
  controllers: [],
  providers: [],
})
export class TenantModule {
  constructor() {

  }
}
