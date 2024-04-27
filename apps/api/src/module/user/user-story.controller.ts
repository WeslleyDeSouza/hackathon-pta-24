import { Body, Controller, Get, Param, Patch, Put } from '@nestjs/common';
import { UserFacade, UserStoryFacade, UserStoryUpdate } from '@hackathon-pta/api/model/user';
import {UserStoryCreate} from "@hackathon-pta/api/model/user";
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { ProjectDtoResponse } from '@hackathon-pta/api/model/project';
import { CurrentTenant } from '@hackathon-pta/api/common';

@Controller('user-story')
@ApiTags('UserStory')
export class UserStoryController {
  constructor(
    private readonly userService: UserFacade,
    private readonly userStoryService: UserStoryFacade
  ) {}

  @Put('create')
  createUserStory(@Body()story:UserStoryCreate) {


  }

  @Patch('update')
  updateUserStory(@Body()story:UserStoryUpdate) {

  }

  @Get('list/:projectId')
  @ApiOkResponse({
    description: 'The Project records',
    type: ProjectDtoResponse,
    isArray: true
  })
  listFromProject(
    @Param('projectId')projectId:number,
    @CurrentTenant()id:number) {
    return this.userStoryService.listByProjectId(
      id,projectId,
    )
  }
}
