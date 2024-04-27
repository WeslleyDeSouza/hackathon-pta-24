import { Injectable } from '@angular/core';
import { ProjectService } from '@hackathon-pta/app/api';
import {
  ProjectCreateProject$Params
} from '../../../../../../../libs/app/generated/core/fn/project/project-create-project';
import { ProjectDtoCreate } from '../../../../../../../libs/app/generated/core/models/project-dto-create';
import { BehaviorSubject } from 'rxjs';


@Injectable()
export class ProjectStore{
  projects$ = new BehaviorSubject([])
}
