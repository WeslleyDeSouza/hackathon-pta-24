import {
  Body,
  Controller,
  Get,
  HttpException,
  Param,
  Patch,
  Put,
  Query,
  UseGuards,
} from "@nestjs/common";
import {
  UserFacade,
  UserStoryFacade,
  UserStoryDtoUpdate,
  UserStoryDtoResponse,
  UserStoryWithReviewDtoResponse,
  IUser,
} from "@hackathon-pta/api/model/user";
import { UserStoryDtoCreate } from "@hackathon-pta/api/model/user";
import { ApiOkResponse, ApiProperty, ApiTags } from "@nestjs/swagger";
import {
  CurrentTenant,
  CurrentUser,
  TenantMockGuard,
  UserMockGuard,
} from "@hackathon-pta/api/common";
import { UserStoryEstimationFacade } from "@hackathon-pta/api/model/user";

class NumberResultDto {
  @ApiProperty()
  result: number;
}

@Controller("user-story")
@ApiTags("UserStory")
@UseGuards(UserMockGuard, TenantMockGuard)
export class UserStoryController {
  constructor(
    private readonly userService: UserFacade,
    private readonly userStoryService: UserStoryFacade,
    private readonly userStoryEstimationService: UserStoryEstimationFacade
  ) {}

  @Put("create")
  createUserStory(@Body() story: UserStoryDtoCreate) {}

  @Patch("update")
  updateUserStory(@CurrentTenant() id: number, @Body() story: UserStoryDtoUpdate) {
    this.userStoryService.update(id, story.projectId, story);
  }

  @Patch("update-state/:projectId/:userStoryId/:state")
  setStateForReview(
    @CurrentTenant() tenant: any,
    @Param("projectId") projectId: number,
    @Param("userStoryId") userStoryId: number,
    @Param("state") state: boolean
  ) {
    return this.userStoryService.setStateForReview(tenant.tenantId, projectId, userStoryId, state);
  }

  @Get("list/:projectId")
  @ApiOkResponse({
    description: "The Project records",
    type: () => UserStoryWithReviewDtoResponse,
    isArray: true,
  })
  listByProjectId(
    @Query("withEstimation") withEstimation: boolean,
    @Param("projectId") projectId: number,
    @CurrentTenant() tenant: any,
    @CurrentTenant() user: IUser
  ) {
    const filterWithEstimationOnlySelf = true;
    return this.userStoryService
      .listByProjectId(tenant.tenantId, projectId, { withEstimation })
      .then(userStories => {
        return userStories.map(userStory => {
          let estimation = undefined;
          if (filterWithEstimationOnlySelf) {
            estimation = userStory.estimations.filter(estimation => {
              return !!estimation.user?.userId;
            })?.[0];
            delete userStory.estimations;
          }

          return {
            ...userStory,
            estimation: {
              estimationValue: estimation?.estimateValue,
              estimationId: estimation?.estimationId,
            },
          };
        });
      });
  }

  @Get(':projectId/completion')
  @ApiOkResponse({
    description: 'Percentage of completeness of project',
    type: NumberResultDto
  })
  getCompletionPercentage(@Param('projectId') projectId: number, @CurrentTenant() tenant: any): Promise<NumberResultDto> {
    return this.userService.findAll().then(u => {
        return this.userStoryService.listByProjectId(tenant.tenantId, projectId, {withEstimation: true}).then(us => {
          const countEstimations = us.reduce((accumulator, currentValue) => {
            return accumulator + currentValue.estimations.reduce((sum, val) => { return sum + 1 }, 0);
          }, 0);
          const totalPossibleEstimations = us.length * u.length;
          return {
            result: 100 / totalPossibleEstimations * countEstimations
          };
        })
    });
  }

  @Put("estimation/:projectId/:storyId/:estimationId/:value")
  setEstimation(
    @Param("storyId") storyId: number,
    @Param("projectId") projectId: number,
    @Param("estimationId") estimationId: string,
    @Param("value") value: number,
    @CurrentTenant() tenant: any,
    @CurrentUser() user: IUser
  ) {
    if (value < 0) return new HttpException("Value not in Range", 500);
    return this.userStoryEstimationService.setEstimation(
      tenant.tenantId,
      user.userId,
      storyId,
      projectId,
      estimationId === "new" ? null : +estimationId,
      value
    );
  }

  @Get("estimation/:projectId/:storyId/:estimationId")
  @ApiOkResponse({
    description: "Gets Estimation from User and Story",
    type: Number,
  })
  getEstimation(
    @Param("storyId") storyId: number,
    @Param("projectId") projectId: number,
    @Param("estimationId") estimationId: number,
    @CurrentTenant() tenant: any,
    @CurrentUser() user: IUser
  ) {
    return this.userStoryEstimationService
      .getEstimation(tenant.tenantId, user.userId, storyId, projectId, estimationId)
      .then(row => row?.estimateValue);
  }
}
