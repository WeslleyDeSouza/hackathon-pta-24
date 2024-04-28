import { Body, Controller, Get, Param, Patch, Put } from '@nestjs/common';
import { UserFacade, UserStoryFacade, UserStoryDtoUpdate, UserStoryDtoResponse } from '@hackathon-pta/api/model/user';
import {UserStoryDtoCreate} from "@hackathon-pta/api/model/user";
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { CurrentTenant } from '@hackathon-pta/api/common';

@Controller('user-story')
@ApiTags('UserStory')
export class UserStoryController {
  constructor(
    private readonly userService: UserFacade,
    private readonly userStoryService: UserStoryFacade
  ) {}

  @Put('create')
  createUserStory(@Body()story:UserStoryDtoCreate) {


  }

  @Patch('update')
  updateUserStory( @CurrentTenant()id:number,@Body()story:UserStoryDtoUpdate) {
    this.userStoryService.update(id,story.projectId,story)
  }

  @Patch('update-state/:projectId/:userStoryId/:state')
  setStateForReview( @CurrentTenant()id:number,
                   @Param('projectId')projectId:number,
                   @Param('userStoryId')userStoryId:number,
                   @Param('state')state:boolean,
                   ) {
   return this.userStoryService.setStateForReview(id,projectId,userStoryId,state )
  }

  @Get('list/:projectId')
  @ApiOkResponse({
    description: 'The Project records',
    type: UserStoryDtoResponse,
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
