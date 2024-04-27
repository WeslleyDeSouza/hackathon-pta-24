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
import { projectDeleteProject } from '../fn/project/project-delete-project';
import { ProjectDeleteProject$Params } from '../fn/project/project-delete-project';
import { projectUpdateProject } from '../fn/project/project-update-project';
import { ProjectUpdateProject$Params } from '../fn/project/project-update-project';

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

  /** Path part for operation `projectUpdateProject()` */
  static readonly ProjectUpdateProjectPath = '/api/project/update';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `projectUpdateProject()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  projectUpdateProject$Response(params: ProjectUpdateProject$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return projectUpdateProject(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `projectUpdateProject$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  projectUpdateProject(params: ProjectUpdateProject$Params, context?: HttpContext): Observable<void> {
    return this.projectUpdateProject$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `projectDeleteProject()` */
  static readonly ProjectDeleteProjectPath = '/api/project/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `projectDeleteProject()` instead.
   *
   * This method doesn't expect any request body.
   */
  projectDeleteProject$Response(params?: ProjectDeleteProject$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return projectDeleteProject(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `projectDeleteProject$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  projectDeleteProject(params?: ProjectDeleteProject$Params, context?: HttpContext): Observable<void> {
    return this.projectDeleteProject$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
