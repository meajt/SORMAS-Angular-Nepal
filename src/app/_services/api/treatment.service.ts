import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BaseService } from './base.service';

import * as constants from '../../app.constants';
import { TreatmentDto } from '../../_models/models';
import { HelperService } from '../helper.service';
import { TreatmentSerializer } from '../../_serializers/treatment.serializer';

@Injectable({
  providedIn: 'root',
})
export class TreatmentService extends BaseService<TreatmentDto> {
  constructor(httpClient: HttpClient, helperService: HelperService) {
    super(httpClient, helperService, '', constants.API_ROUTE_TREATMENTS, new TreatmentSerializer());
  }
}