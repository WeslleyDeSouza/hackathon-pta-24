/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { userCreateUser } from '../fn/operations/user-create-user';
import { UserCreateUser$Params } from '../fn/operations/user-create-user';
import { userStoryCreateUser } from '../fn/operations/user-story-create-user';
import { UserStoryCreateUser$Params } from '../fn/operations/user-story-create-user';

@Injectable({ providedIn: 'root' })
export class ApiService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `userCreateUser()` */
  static readonly UserCreateUserPath = '/api/user/create';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `userCreateUser()` instead.
   *
   * This method doesn't expect any request body.
   */
  userCreateUser$Response(params?: UserCreateUser$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return userCreateUser(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `userCreateUser$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  userCreateUser(params?: UserCreateUser$Params, context?: HttpContext): Observable<void> {
    return this.userCreateUser$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `userStoryCreateUser()` */
  static readonly UserStoryCreateUserPath = '/api/user-story/create';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `userStoryCreateUser()` instead.
   *
   * This method doesn't expect any request body.
   */
  userStoryCreateUser$Response(params?: UserStoryCreateUser$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return userStoryCreateUser(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `userStoryCreateUser$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  userStoryCreateUser(params?: UserStoryCreateUser$Params, context?: HttpContext): Observable<void> {
    return this.userStoryCreateUser$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
