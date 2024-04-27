/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { BadgeAchievementEntity } from '../models/badge-achievement-entity';
import { badgeFindOne } from '../fn/badge/badge-find-one';
import { BadgeFindOne$Params } from '../fn/badge/badge-find-one';
import { badgeList } from '../fn/badge/badge-list';
import { BadgeList$Params } from '../fn/badge/badge-list';
import { badgeListByUserId } from '../fn/badge/badge-list-by-user-id';
import { BadgeListByUserId$Params } from '../fn/badge/badge-list-by-user-id';

@Injectable({ providedIn: 'root' })
export class BadgeService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `badgeList()` */
  static readonly BadgeListPath = '/api/badge';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `badgeList()` instead.
   *
   * This method doesn't expect any request body.
   */
  badgeList$Response(params?: BadgeList$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<BadgeAchievementEntity>>> {
    return badgeList(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `badgeList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  badgeList(params?: BadgeList$Params, context?: HttpContext): Observable<Array<BadgeAchievementEntity>> {
    return this.badgeList$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<BadgeAchievementEntity>>): Array<BadgeAchievementEntity> => r.body)
    );
  }

  /** Path part for operation `badgeListByUserId()` */
  static readonly BadgeListByUserIdPath = '/api/badge/user/{userId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `badgeListByUserId()` instead.
   *
   * This method doesn't expect any request body.
   */
  badgeListByUserId$Response(params: BadgeListByUserId$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<BadgeAchievementEntity>>> {
    return badgeListByUserId(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `badgeListByUserId$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  badgeListByUserId(params: BadgeListByUserId$Params, context?: HttpContext): Observable<Array<BadgeAchievementEntity>> {
    return this.badgeListByUserId$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<BadgeAchievementEntity>>): Array<BadgeAchievementEntity> => r.body)
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
  badgeFindOne$Response(params: BadgeFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<BadgeAchievementEntity>> {
    return badgeFindOne(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `badgeFindOne$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  badgeFindOne(params: BadgeFindOne$Params, context?: HttpContext): Observable<BadgeAchievementEntity> {
    return this.badgeFindOne$Response(params, context).pipe(
      map((r: StrictHttpResponse<BadgeAchievementEntity>): BadgeAchievementEntity => r.body)
    );
  }

}
