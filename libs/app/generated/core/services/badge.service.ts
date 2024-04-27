/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { badgeFindFromUser } from '../fn/badge/badge-find-from-user';
import { BadgeFindFromUser$Params } from '../fn/badge/badge-find-from-user';
import { badgeFindOne } from '../fn/badge/badge-find-one';
import { BadgeFindOne$Params } from '../fn/badge/badge-find-one';

@Injectable({ providedIn: 'root' })
export class BadgeService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `badgeFindFromUser()` */
  static readonly BadgeFindFromUserPath = '/api/badge';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `badgeFindFromUser()` instead.
   *
   * This method doesn't expect any request body.
   */
  badgeFindFromUser$Response(params?: BadgeFindFromUser$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return badgeFindFromUser(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `badgeFindFromUser$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  badgeFindFromUser(params?: BadgeFindFromUser$Params, context?: HttpContext): Observable<void> {
    return this.badgeFindFromUser$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `badgeFindOne()` */
  static readonly BadgeFindOnePath = '/api/badge/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `badgeFindOne()` instead.
   *
   * This method doesn't expect any request body.
   */
  badgeFindOne$Response(params: BadgeFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return badgeFindOne(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `badgeFindOne$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  badgeFindOne(params: BadgeFindOne$Params, context?: HttpContext): Observable<void> {
    return this.badgeFindOne$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
