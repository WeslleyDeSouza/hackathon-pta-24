import { Injectable } from '@angular/core';
import { ProjectService } from '@hackathon-pta/app/api';


@Injectable()
export class ProjectApi{
  constructor(protected projectService:ProjectService) {
  }
}
