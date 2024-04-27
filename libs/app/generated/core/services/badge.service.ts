/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { badgeFindAll } from '../fn/badge/badge-find-all';
import { BadgeFindAll$Params } from '../fn/badge/badge-find-all';
import { badgeFindOne } from '../fn/badge/badge-find-one';
import { BadgeFindOne$Params } from '../fn/badge/badge-find-one';

@Injectable({ providedIn: 'root' })
export class BadgeService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `badgeFindAll()` */
  static readonly BadgeFindAllPath = '/api/badge';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `badgeFindAll()` instead.
   *
   * This method doesn't expect any request body.
   */
  badgeFindAll$Response(params?: BadgeFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return badgeFindAll(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `badgeFindAll$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  badgeFindAll(params?: BadgeFindAll$Params, context?: HttpContext): Observable<void> {
    return this.badgeFindAll$Response(params, context).pipe(
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
