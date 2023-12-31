import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BaseService } from './base.service';
import * as constants from '../../app.constants';
import { HelperService } from '../helper.service';
import { ListingDto } from '../../_models/listingDto';
import { Serializer } from '../../_serializers/serializer';

@Injectable({
  providedIn: 'root',
})
export class ListingService extends BaseService<ListingDto> {
  constructor(httpClient: HttpClient, helperService: HelperService) {
    super(httpClient, helperService, '', constants.API_ROUTE_LINSTINGS, new Serializer());
  }

  getAllEnabled(): Observable<any> {
    // endpoint
    const endpoint = 'lineListing/enabled';

    const requestPayload = {
      featureTypes: ['LINE_LISTING'],
    };

    return this.httpClient
      .post(`${this.helperService.getApiUrl()}/${endpoint}`, requestPayload)
      .pipe(
        map((data: any) => {
          const newData = [];
          // eslint-disable-next-line no-restricted-syntax
          for (const key in data) {
            if (key) {
              newData.push({
                disease: key,
                listings: data[key],
              });
            }
          }
          return newData;
        })
      );
  }

  deleteAll(disease?: any, regionId?: any): Observable<any> {
    // endpoint
    const endpoint = constants.API_ROUTE_LINSTINGS.DELETE;

    const requestPayload = {
      disease,
      region: regionId,
    };
    if (!disease) {
      delete requestPayload.disease;
    }

    if (!regionId) {
      delete requestPayload.region;
    }

    return this.httpClient
      .post(`${this.helperService.getApiUrl()}/${endpoint}`, requestPayload)
      .pipe(
        map((data: any) => {
          return data;
        })
      );
  }
}
