import {ApiProperty} from "@nestjs/swagger";
import { ProjectEntity } from '../entities';


export class projectDtoCreate extends ProjectEntity {
  @ApiProperty({required:true})
  override title: string;



}

export class projectDtoUpdate extends projectDtoCreate {
  @ApiProperty({type:Number,required:true})
  override projectId: number;
}
