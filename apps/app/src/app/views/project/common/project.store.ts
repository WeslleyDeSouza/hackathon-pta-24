import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProjectDtoResponse } from '@hackathon-pta/app/api';


@Injectable()
export class ProjectStore{
 readonly projects$:BehaviorSubject<ProjectDtoResponse[]> = new BehaviorSubject<ProjectDtoResponse[]>([])

  get data$():BehaviorSubject<ProjectDtoResponse[]>{
   return this.projects$
  }
}
