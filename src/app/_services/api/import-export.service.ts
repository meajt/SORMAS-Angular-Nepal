import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from './base.service';
import * as constants from '../../app.constants';
import { HelperService } from '../helper.service';
import { ExportConfigurationDto } from '../../_models/models';
import { Serializer } from '../../_serializers/serializer';

@Injectable({
  providedIn: 'root',
})
export class ImportExportService extends BaseService<ExportConfigurationDto> {
  constructor(httpClient: HttpClient, helperService: HelperService) {
    super(httpClient, helperService, '', constants.API_ROUTE_IMPORT_EXPORT, new Serializer());
  }

  import(type: string): Observable<any> {
    const endpoint = this.endpoint.IMPORT ?? this.endpoint.ENDPOINT;
    return this.httpClient.post(`${this.helperService.getApiUrl()}/${endpoint}`, {
      importType: type,
    });
  }
}
