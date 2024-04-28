/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { userStoryCreateUserStory } from '../fn/user-story/user-story-create-user-story';
import { UserStoryCreateUserStory$Params } from '../fn/user-story/user-story-create-user-story';
import { userStoryGetEstimation } from '../fn/user-story/user-story-get-estimation';
import { UserStoryGetEstimation$Params } from '../fn/user-story/user-story-get-estimation';
import { userStoryListByProjectId } from '../fn/user-story/user-story-list-by-project-id';
import { UserStoryListByProjectId$Params } from '../fn/user-story/user-story-list-by-project-id';
import { userStorySetEstimation } from '../fn/user-story/user-story-set-estimation';
import { UserStorySetEstimation$Params } from '../fn/user-story/user-story-set-estimation';
import { userStorySetStateForReview } from '../fn/user-story/user-story-set-state-for-review';
import { UserStorySetStateForReview$Params } from '../fn/user-story/user-story-set-state-for-review';
import { userStoryUpdateUserStory } from '../fn/user-story/user-story-update-user-story';
import { UserStoryUpdateUserStory$Params } from '../fn/user-story/user-story-update-user-story';
import { UserStoryWithReviewDtoResponse } from '../models/user-story-with-review-dto-response';

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

  /** Path part for operation `userStorySetStateForReview()` */
  static readonly UserStorySetStateForReviewPath = '/api/user-story/update-state/{projectId}/{userStoryId}/{state}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `userStorySetStateForReview()` instead.
   *
   * This method doesn't expect any request body.
   */
  userStorySetStateForReview$Response(params: UserStorySetStateForReview$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return userStorySetStateForReview(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `userStorySetStateForReview$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  userStorySetStateForReview(params: UserStorySetStateForReview$Params, context?: HttpContext): Observable<void> {
    return this.userStorySetStateForReview$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `userStoryListByProjectId()` */
  static readonly UserStoryListByProjectIdPath = '/api/user-story/list/{projectId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `userStoryListByProjectId()` instead.
   *
   * This method doesn't expect any request body.
   */
  userStoryListByProjectId$Response(params: UserStoryListByProjectId$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<UserStoryWithReviewDtoResponse>>> {
    return userStoryListByProjectId(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `userStoryListByProjectId$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  userStoryListByProjectId(params: UserStoryListByProjectId$Params, context?: HttpContext): Observable<Array<UserStoryWithReviewDtoResponse>> {
    return this.userStoryListByProjectId$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<UserStoryWithReviewDtoResponse>>): Array<UserStoryWithReviewDtoResponse> => r.body)
    );
  }

  /** Path part for operation `userStorySetEstimation()` */
  static readonly UserStorySetEstimationPath = '/api/user-story/estimation/{projectId}/{storyId}/{estimationId}/{value}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `userStorySetEstimation()` instead.
   *
   * This method doesn't expect any request body.
   */
  userStorySetEstimation$Response(params: UserStorySetEstimation$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return userStorySetEstimation(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `userStorySetEstimation$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  userStorySetEstimation(params: UserStorySetEstimation$Params, context?: HttpContext): Observable<void> {
    return this.userStorySetEstimation$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `userStoryGetEstimation()` */
  static readonly UserStoryGetEstimationPath = '/api/user-story/estimation/{projectId}/{storyId}/{estimationId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `userStoryGetEstimation()` instead.
   *
   * This method doesn't expect any request body.
   */
  userStoryGetEstimation$Response(params: UserStoryGetEstimation$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return userStoryGetEstimation(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `userStoryGetEstimation$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  userStoryGetEstimation(params: UserStoryGetEstimation$Params, context?: HttpContext): Observable<number> {
    return this.userStoryGetEstimation$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

}
