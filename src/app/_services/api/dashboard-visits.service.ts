import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as constants from '../../app.constants';
import { HelperService } from '../helper.service';
import { DashboardService } from './dashboard.service';
import { DashboardVisitsSerializer } from '../../_serializers/dashboard-visits.serializer';

@Injectable({
  providedIn: 'root',
})
export class DashboardVisitsService extends DashboardService {
  constructor(protected httpClient: HttpClient, protected helperService: HelperService) {
    super(
      httpClient,
      helperService,
      '',
      constants.API_ROUTE_DASHBOARD_VISITS,
      new DashboardVisitsSerializer()
    );
  }
}