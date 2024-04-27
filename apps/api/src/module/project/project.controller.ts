import { Body, Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ProjectDtoCreate, ProjectFacade } from '@hackathon-pta/api/model/project';

@Controller('project')
@ApiTags('Project')
export class ProjectController {
  constructor(private readonly projectService: ProjectFacade) {

  }

  @Get('create')
  createProject(@Body() projectDto:ProjectDtoCreate) {

  }
}
