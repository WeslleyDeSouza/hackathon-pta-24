import { Body, Controller, Get, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import {  TenantDTOCreate, TenantFacade } from '@hackathon-pta/api/model/tenant';
import { TenantMockGuard, UserMockGuard } from '@hackathon-pta/api/common';

@Controller('tenant')
@ApiTags('Tenant')
@UseGuards(UserMockGuard,TenantMockGuard)
export class TenantController {
  constructor(private readonly tenantFacade: TenantFacade) {}

  @Get('create')
  create(@Body() tenantDTO:TenantDTOCreate) {}
}
