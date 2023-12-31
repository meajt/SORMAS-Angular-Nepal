import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Resource } from '../../_models/resource';
import { HelperService } from '../helper.service';
import { Serializer } from '../../_serializers/serializer';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  constructor(
    protected httpClient: HttpClient,
    protected helperService: HelperService,
    @Inject('string') private url: string,
    @Inject('any') protected endpoint: any,
    @Inject('Serializer') protected serializer: Serializer
  ) {}

  getCalculated(filters?: any): Observable<Resource> {
    const endpoint = this.endpoint.GET_ALL || this.endpoint.ENDPOINT;
    const requestPayload: any = {};

    if (filters.length) {
      filters.forEach((filter: any) => {
        requestPayload[filter.field] = filter.value;
      });
    }

    return this.httpClient
      .post(`${this.helperService.getApiUrl()}/${endpoint}`, requestPayload)
      .pipe(
        map((data: any) => {
          return this.convertData(data);
        })
      );
  }

  private convertData(data: any): Resource {
    return this.serializer.fromJson(data);
  }
}
