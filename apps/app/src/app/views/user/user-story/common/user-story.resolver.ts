import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { UserStoryService } from '@hackathon-pta/app/api';

@Injectable()
export class UserStoryResolver implements Resolve<any> {
  constructor(
    protected userStoryService:UserStoryService
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any>|Promise<any>|any {
    const {params} = route;
    const {projectId} = params;
   return this.userStoryService.userStoryListFromProject({
      projectId
    })
  }
}
