import { Body, Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import {  TenantDTOCreate, TenantFacade } from '@hackathon-pta/api/model/tenant';

@Controller('tenant')
@ApiTags('Tenant')
export class ProjectController {
  constructor(private readonly tenantFacade: TenantFacade) {
    tenantFacade.create({
      tenantId:1,
      name:'PTA Undefined Team'
    })
  }

  @Get('create')
  createProject(@Body() tenantDTO:TenantDTOCreate) {}
}
