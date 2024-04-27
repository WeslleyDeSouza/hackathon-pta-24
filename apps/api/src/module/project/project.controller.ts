import { Body, Controller, Delete, Get, Param, Patch, Put, UseGuards } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import {
  ProjectDtoCreate,
  ProjectDtoResponse,
  ProjectDtoUpdate,
  ProjectFacade
} from '@hackathon-pta/api/model/project';
import { CurrentTenant, TenantMockGuard, UserMockGuard } from '@hackathon-pta/api/common';

@Controller('project')
@ApiTags('Project')
@UseGuards(UserMockGuard,TenantMockGuard)
export class ProjectController {
  constructor(private readonly projectService: ProjectFacade) {

  }

  @Get('')
  @ApiOkResponse({
    description: 'The Project records',
    type: ProjectDtoResponse,
    isArray: true
  })
  list(@CurrentTenant()tenant) {
    return this.projectService.list(
      tenant.tenantId,
    )
  }

  @Put('create')
  @ApiOkResponse({
    description: 'The Project record',
    type: ProjectDtoResponse,
  })
  create(@CurrentTenant()tenant, @Body() projectDto:ProjectDtoCreate) {
   return this.projectService.create(
      tenant.tenantId,projectDto
    )
  }

  @Patch('update')
  @ApiOkResponse({
    description: 'The Project record',
    type: ProjectDtoResponse,
  })
  update(@CurrentTenant()tenant, @Body() projectDto:ProjectDtoUpdate) {
    return this.projectService.update(
      tenant.tenantId,projectDto
    )
  }

  @Delete(':id')
  delete(@CurrentTenant()tenant, @Param() id:number) {
    return this.projectService.delete(
      tenant.tenantId,id
    )
  }
}
