import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as constants from '../../app.constants';
import { HelperService } from '../helper.service';
import { DashboardService } from './dashboard.service';
import { DiseaseBurdenSerializer } from '../../_serializers/disease-burden.serializer';

@Injectable({
  providedIn: 'root',
})
export class DiseaseBurdenService extends DashboardService {
  constructor(protected httpClient: HttpClient, protected helperService: HelperService) {
    super(
      httpClient,
      helperService,
      '',
      constants.API_ROUTE_DISEASE_BURDEN,
      new DiseaseBurdenSerializer()
    );
  }
}