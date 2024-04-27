import { Body, Controller, Get, Put, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ProjectDtoCreate, ProjectFacade } from '@hackathon-pta/api/model/project';
import { CurrentTenant, TenantMockGuard, UserMockGuard } from '@hackathon-pta/api/common';

@Controller('project')
@ApiTags('Project')
@UseGuards(UserMockGuard,TenantMockGuard)
export class ProjectController {
  constructor(private readonly projectService: ProjectFacade) {

  }

  @Put('create')
  createProject(@CurrentTenant()tenant, @Body() projectDto:ProjectDtoCreate) {

  }
}
