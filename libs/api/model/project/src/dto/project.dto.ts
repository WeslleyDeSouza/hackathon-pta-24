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

export class ProjectDtoResponse extends ProjectEntity {
  @ApiProperty()
  override title: string;
  @ApiProperty()
  override tenantId: number;
  @ApiProperty()
  override projectId: number;

}
