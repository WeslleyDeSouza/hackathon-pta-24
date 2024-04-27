import { Injectable } from '@angular/core';
import { ProjectService } from '@hackathon-pta/app/api';
import { ProjectDtoCreate } from '../../../../../../../libs/app/generated/core/models/project-dto-create';


@Injectable()
export class ProjectStore{}

@Injectable()
export class ProjectApi{
  constructor(protected projectService:ProjectService) {
  }

  create(params: ProjectDtoCreate){
    return this.projectService.projectCreate(
      {
        body:params
      }
    )
  }
  list(){
    return this.projectService.projectList(
      {
        body:{}
      }
    )
  }
}
