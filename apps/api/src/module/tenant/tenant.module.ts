import { Module } from '@nestjs/common';
import { ApiModelTenantModule, TenantFacade } from '@hackathon-pta/api/model/tenant';
import { TenantController } from './tenant.controller';
import { DummyDataGenerator } from '../../common/_dummy-data';

@Module({
  imports: [
    ApiModelTenantModule
  ],
  controllers: [
    TenantController
  ],
  providers: [],
})
export class TenantModule {
  constructor(facade:TenantFacade) {
    DummyDataGenerator.tenantGenerate(facade)
  }
}
