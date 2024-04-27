/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { projectCreateProject } from '../fn/project/project-create-project';
import { ProjectCreateProject$Params } from '../fn/project/project-create-project';

@Injectable({ providedIn: 'root' })
export class ProjectService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `projectCreateProject()` */
  static readonly ProjectCreateProjectPath = '/api/project/create';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `projectCreateProject()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  projectCreateProject$Response(params: ProjectCreateProject$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return projectCreateProject(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `projectCreateProject$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  projectCreateProject(params: ProjectCreateProject$Params, context?: HttpContext): Observable<void> {
    return this.projectCreateProject$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
