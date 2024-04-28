import { Injectable } from "@nestjs/common";
import { UserStoryEntity } from "../entities/user-story.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { UserStoryEstimationEntity } from "../entities/user-story-estimation.entity";

@Injectable()
export class UserStoryEstimationFacade {
  constructor(
    @InjectRepository(UserStoryEstimationEntity)
    protected userStoryEstimationEntity: Repository<UserStoryEstimationEntity>
  ) {}

  setEstimation(
    tenantId: number,
    userId: string,
    userStoryId: number,
    projectId: number,
    reviewId: number,
    value: number
  ) {
    const estimation = this.userStoryEstimationEntity.create();
    estimation.user = { userId } as any;
    estimation.tenantId = tenantId;
    estimation.projectId = projectId;
    estimation.userStoryId = userStoryId;
    if (reviewId) estimation.estimationId = reviewId;
    estimation.estimateValue = value;

    console.log(estimation);

    return this.userStoryEstimationEntity.save(estimation);
  }

  getEstimation(
    tenantId: number,
    userId: string,
    userStoryId: number,
    projectId: number,
    estimationId: number
  ) {
    return this.userStoryEstimationEntity.findOne({
      where: {
        tenantId,
        user: { userId },
        userStory: { userStoryId: userStoryId || -1 },
        projectId,
        estimationId: estimationId || -1,
      },
    });
  }
}
