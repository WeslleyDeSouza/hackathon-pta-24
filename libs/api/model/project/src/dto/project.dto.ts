import {ApiProperty} from "@nestjs/swagger";
import { ProjectEntity } from '../entities';


export class ProjectDtoCreate extends ProjectEntity {
  @ApiProperty({required:true})
  override title: string;



}

export class ProjectDtoUpdate extends ProjectDtoCreate {
  @ApiProperty({type:Number,required:true})
  override projectId: number;
}
