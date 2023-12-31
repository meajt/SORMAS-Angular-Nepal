import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BaseService } from './base.service';

import * as constants from '../../app.constants';
import { PersonDto } from '../../_models/models';
import { HelperService } from '../helper.service';
import { Filter } from '../../_models/common';
import { Serializer } from '../../_serializers/serializer';

@Injectable({
  providedIn: 'root',
})
export class PersonService extends BaseService<PersonDto> {
  constructor(httpClient: HttpClient, helperService: HelperService) {
    super(httpClient, helperService, '', constants.API_ROUTE_PERSONS, new Serializer());
  }

  getSimilar(filters: Filter[] = []): Observable<any[]> {
    const endpoint = this.endpoint.MATCH;
    const requestPayload: any = {};

    filters.forEach((filter: any) => {
      requestPayload[filter.field] = filter.value;
    });

    return this.httpClient
      .post(`${this.helperService.getApiUrl()}/${endpoint}`, requestPayload)
      .pipe(
        map((data: any) => {
          return data.map((item: any) => this.serializer.fromJson(item));
        })
      );
  }

  setMissingCoordinates(filters: Filter[] = []): Observable<any> {
    const endpoint = this.endpoint.SET_MISSING_COORDINATES;
    const requestPayload: any = {};

    filters.forEach((filter: any) => {
      requestPayload[filter.field] = filter.value;
    });

    return this.httpClient
      .post(`${this.helperService.getApiUrl()}/${endpoint}`, requestPayload)
      .pipe(map((data: any) => this.serializer.fromJson(data)));
  }
}
