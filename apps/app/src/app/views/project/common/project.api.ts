import { Injectable } from '@angular/core';
import { ProjectService } from '@hackathon-pta/app/api';
import {
  ProjectCreateProject$Params
} from '../../../../../../../libs/app/generated/core/fn/project/project-create-project';
import { ProjectDtoCreate } from '../../../../../../../libs/app/generated/core/models/project-dto-create';


@Injectable()
export class ProjectApi{
  constructor(protected projectService:ProjectService) {
  }

  projectCreateProject(params: ProjectDtoCreate){
    return this.projectService.projectCreateProject(
      {
        body:params
      }
    )
  }
}
