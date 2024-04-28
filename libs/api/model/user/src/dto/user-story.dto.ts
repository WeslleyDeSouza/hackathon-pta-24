import {UserStoryEntity} from "../entities/user-story.entity";
import {ApiProperty} from "@nestjs/swagger";


export class UserStoryDtoCreate extends UserStoryEntity {
  @ApiProperty({required:true})
  override title: string;

  @ApiProperty()
  override description: string;

  @ApiProperty({
    required:true
  })
  override projectId: number;
}

export class UserStoryDtoUpdate extends UserStoryDtoCreate {
  @ApiProperty({type:Number,required:true})
  override userStoryId: number;
}

export class UserStoryDtoResponse extends UserStoryDtoCreate {
  @ApiProperty({required:true})
  override title: string;

  @ApiProperty()
  override description: string;

  @ApiProperty()
  override projectId: number;
  @ApiProperty()
  override userStoryId: number;

  @ApiProperty({type:Date})
  override updatedAt: boolean;

  @ApiProperty({type:Number})
  override stateOpenForReview: Date;
}
