import { Injectable } from '@angular/core';
import { ProjectService } from '@hackathon-pta/app/api';
import {
  ProjectCreateProject$Params
} from '../../../../../../../libs/app/generated/core/fn/project/project-create-project';
import { ProjectDtoCreate } from '../../../../../../../libs/app/generated/core/models/project-dto-create';


@Injectable()
export class ProjectStore{}

@Injectable()
export class ProjectApi{
  constructor(protected projectService:ProjectService) {
  }

  create(params: ProjectDtoCreate){
    return this.projectService.projectCreateProject(
      {
        body:params
      }
    )
  }
  list(){
    return this.projectService.projectListProject(
      {
        body:{}
      }
    )
  }
}
