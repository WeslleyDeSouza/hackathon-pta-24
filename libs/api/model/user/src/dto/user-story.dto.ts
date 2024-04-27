import {UserStoryEntity} from "../entities/user-story.entity";
import {ApiProperty} from "@nestjs/swagger";


export class UserStoryCreate extends UserStoryEntity {
  @ApiProperty({required:true})
  override title: string;

  @ApiProperty()
  override description: string;

  @ApiProperty({
    required:true
  })
  override projectId: number;
}

export class UserStoryUpdate extends UserStoryCreate {
  @ApiProperty({type:Number,required:true})
  override userStoryId: number;
}
