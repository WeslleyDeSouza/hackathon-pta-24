/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { BadgeEntity } from '../../models/badge-entity';

export interface BadgeFindOne$Params {
  id: string;
}

export function badgeFindOne(http: HttpClient, rootUrl: string, params: BadgeFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<BadgeEntity>> {
  const rb = new RequestBuilder(rootUrl, badgeFindOne.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<BadgeEntity>;
    })
  );
}

badgeFindOne.PATH = '/api/badge/{id}';
