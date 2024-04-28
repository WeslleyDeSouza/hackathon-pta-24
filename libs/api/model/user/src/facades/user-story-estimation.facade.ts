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

  async setEstimation(
    tenantId: number,
    userId: string,
    userStoryId: number,
    projectId: number,
    estimationId: number,
    value: number
  ) {
    const userEstimation = await this.getEstimation(tenantId, userId, userStoryId, projectId);

    if (userEstimation) {
      userEstimation.estimateValue = value;
      return userEstimation.save();
    }

    const estimation = this.userStoryEstimationEntity.create();
    estimation.user = { userId } as any;
    estimation.tenantId = tenantId;
    estimation.projectId = projectId;
    estimation.userStoryId = userStoryId;
    if (estimationId) estimation.estimationId = estimationId;
    estimation.estimateValue = value;

    return this.userStoryEstimationEntity.save(estimation);
  }

  getEstimation(
    tenantId: number,
    userId: string,
    userStoryId: number,
    projectId: number,
    estimationId?: number
  ) {
    const params: any = {
      tenantId,
      user: { userId },
      userStory: { userStoryId: userStoryId || -1 },
      projectId,
    };

    if (estimationId) {
      params.estimationId = estimationId || -1;
    }

    return this.userStoryEstimationEntity.findOne({
      where: params,
    });
  }
  getEstimations(tenantId: number, userStoryId: number, projectId: number) {
    return this.userStoryEstimationEntity.find({
      relations: ["user"],
      where: {
        tenantId,
        userStory: { userStoryId: userStoryId || -1 },
        projectId,
      },
    });
  }
}
