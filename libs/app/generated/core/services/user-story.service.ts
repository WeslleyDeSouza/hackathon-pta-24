/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { ProjectDtoResponse } from '../models/project-dto-response';
import { userStoryCreateUserStory } from '../fn/user-story/user-story-create-user-story';
import { UserStoryCreateUserStory$Params } from '../fn/user-story/user-story-create-user-story';
import { userStoryListFromProject } from '../fn/user-story/user-story-list-from-project';
import { UserStoryListFromProject$Params } from '../fn/user-story/user-story-list-from-project';
import { userStoryUpdateUserStory } from '../fn/user-story/user-story-update-user-story';
import { UserStoryUpdateUserStory$Params } from '../fn/user-story/user-story-update-user-story';

@Injectable({ providedIn: 'root' })
export class UserStoryService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `userStoryCreateUserStory()` */
  static readonly UserStoryCreateUserStoryPath = '/api/user-story/create';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `userStoryCreateUserStory()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  userStoryCreateUserStory$Response(params: UserStoryCreateUserStory$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return userStoryCreateUserStory(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `userStoryCreateUserStory$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  userStoryCreateUserStory(params: UserStoryCreateUserStory$Params, context?: HttpContext): Observable<void> {
    return this.userStoryCreateUserStory$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `userStoryUpdateUserStory()` */
  static readonly UserStoryUpdateUserStoryPath = '/api/user-story/update';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `userStoryUpdateUserStory()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  userStoryUpdateUserStory$Response(params: UserStoryUpdateUserStory$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return userStoryUpdateUserStory(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `userStoryUpdateUserStory$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  userStoryUpdateUserStory(params: UserStoryUpdateUserStory$Params, context?: HttpContext): Observable<void> {
    return this.userStoryUpdateUserStory$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `userStoryListFromProject()` */
  static readonly UserStoryListFromProjectPath = '/api/user-story/list/{projectId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `userStoryListFromProject()` instead.
   *
   * This method doesn't expect any request body.
   */
  userStoryListFromProject$Response(params: UserStoryListFromProject$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<ProjectDtoResponse>>> {
    return userStoryListFromProject(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `userStoryListFromProject$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  userStoryListFromProject(params: UserStoryListFromProject$Params, context?: HttpContext): Observable<Array<ProjectDtoResponse>> {
    return this.userStoryListFromProject$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<ProjectDtoResponse>>): Array<ProjectDtoResponse> => r.body)
    );
  }

}
