/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { projectCreate } from '../fn/project/project-create';
import { ProjectCreate$Params } from '../fn/project/project-create';
import { projectDelete } from '../fn/project/project-delete';
import { ProjectDelete$Params } from '../fn/project/project-delete';
import { projectList } from '../fn/project/project-list';
import { ProjectList$Params } from '../fn/project/project-list';
import { projectUpdate } from '../fn/project/project-update';
import { ProjectUpdate$Params } from '../fn/project/project-update';

@Injectable({ providedIn: 'root' })
export class ProjectService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `projectList()` */
  static readonly ProjectListPath = '/api/project';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `projectList()` instead.
   *
   * This method doesn't expect any request body.
   */
  projectList$Response(params?: ProjectList$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return projectList(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `projectList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  projectList(params?: ProjectList$Params, context?: HttpContext): Observable<void> {
    return this.projectList$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `projectCreate()` */
  static readonly ProjectCreatePath = '/api/project/create';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `projectCreate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  projectCreate$Response(params: ProjectCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return projectCreate(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `projectCreate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  projectCreate(params: ProjectCreate$Params, context?: HttpContext): Observable<void> {
    return this.projectCreate$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `projectUpdate()` */
  static readonly ProjectUpdatePath = '/api/project/update';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `projectUpdate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  projectUpdate$Response(params: ProjectUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return projectUpdate(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `projectUpdate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  projectUpdate(params: ProjectUpdate$Params, context?: HttpContext): Observable<void> {
    return this.projectUpdate$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `projectDelete()` */
  static readonly ProjectDeletePath = '/api/project/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `projectDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  projectDelete$Response(params?: ProjectDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return projectDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `projectDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  projectDelete(params?: ProjectDelete$Params, context?: HttpContext): Observable<void> {
    return this.projectDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
