import {
    Body,
    Controller,
    Put,
    UseGuards,
  } from "@nestjs/common";
  import {
      IUser,
    UserActivityDtoUpdate,
    UserActivityFacade,
  } from "@hackathon-pta/api/model/user";
  import { ApiOkResponse, ApiTags } from "@nestjs/swagger";
  import {
    CurrentUser,
    TenantMockGuard,
    UserMockGuard,
  } from "@hackathon-pta/api/common";
import { BadgeDtoResponse, BadgeFacade } from "@hackathon-pta/api/model/badge";
  
  @Controller("user-activity")
  @ApiTags("UserActivity")
  @UseGuards(UserMockGuard, TenantMockGuard)
  export class UserActivityController {
    constructor(
      private readonly userActivityService: UserActivityFacade,
      private readonly badgeService: BadgeFacade
    ) {}
  
  @Put("update")
  @ApiOkResponse({
    description: 'Update user activity, returns badges if achieved any',
    type: BadgeDtoResponse,
    isArray: true
  })
    updateUserStory(@CurrentUser() user: IUser, @Body() activity: UserActivityDtoUpdate): Promise<BadgeDtoResponse[]> {
      return this.userActivityService.findByUserId(user.userId)
        .then(a => {
            if (a === null) {
                this.userActivityService.create({
                    userId: user.userId,
                    activities: [{
                        name: activity.activityName,
                        progress: activity.activityProgress
                    }]
                });
            } else {
                const existingActivity = a.activities.find(ac => ac.name === activity.activityName);
                if (existingActivity !== undefined) {
                    existingActivity.progress += activity.activityProgress;
                } else {
                    a.activities.push({
                        name: activity.activityName,
                        progress: activity.activityProgress
                    });
                }
                
                this.userActivityService.create(a);
            }
            const currentActivityProgress = a.activities.find(ac => ac.name === activity.activityName);
            
            return this.badgeService.findByActivityName(activity.activityName)
                .then(badges => badges.filter(b => currentActivityProgress.progress - activity.activityProgress < b.activityValue 
                  && b.activityValue <= currentActivityProgress.progress))
        });
    }
  }
  