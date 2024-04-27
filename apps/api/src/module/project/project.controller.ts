import { Body, Controller, Delete, Get, Param, Patch, Put, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ProjectDtoCreate, ProjectDtoUpdate, ProjectFacade } from '@hackathon-pta/api/model/project';
import { CurrentTenant, TenantMockGuard, UserMockGuard } from '@hackathon-pta/api/common';

@Controller('project')
@ApiTags('Project')
@UseGuards(UserMockGuard,TenantMockGuard)
export class ProjectController {
  constructor(private readonly projectService: ProjectFacade) {}

  @Get('')
  list(@CurrentTenant()tenant) {
    return this.projectService.list(
      tenant.tenantId,
    )
  }

  @Put('create')
  create(@CurrentTenant()tenant, @Body() projectDto:ProjectDtoCreate) {
   return this.projectService.create(
      tenant.tenantId,projectDto
    )
  }

  @Patch('update')
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
