import { Body, Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import {  TenantDTOCreate, TenantFacade } from '@hackathon-pta/api/model/tenant';

@Controller('tenant')
@ApiTags('Tenant')
export class TenantController {
  constructor(private readonly tenantFacade: TenantFacade) {

  }

  @Get('create')
  createProject(@Body() tenantDTO:TenantDTOCreate) {}
}
