import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_ROUTE_EPI_DATA_FOLLOW_UP_STATUS } from '../../app.constants';
import { HelperService } from '../helper.service';
import { DashboardService } from './dashboard.service';
import { Serializer } from '../../_serializers/serializer';

@Injectable({
  providedIn: 'root',
})
export class DashboardEpiDataFollowUpStatusService extends DashboardService {
  constructor(protected httpClient: HttpClient, protected helperService: HelperService) {
    super(httpClient, helperService, '', API_ROUTE_EPI_DATA_FOLLOW_UP_STATUS, new Serializer());
  }
}
