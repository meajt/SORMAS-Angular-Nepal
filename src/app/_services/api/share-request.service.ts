import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BaseService } from './base.service';
import * as constants from '../../app.constants';
import { HelperService } from '../helper.service';
import { SormasToSormasShareRequestIndexDto } from '../../_models/sormasToSormasShareRequestIndexDto';
import { Serializer } from '../../_serializers/serializer';

@Injectable({
  providedIn: 'root',
})
export class ShareRequestService extends BaseService<SormasToSormasShareRequestIndexDto> {
  constructor(httpClient: HttpClient, helperService: HelperService) {
    super(httpClient, helperService, '', constants.API_ROUTE_SHARE_REQUESTS, new Serializer());
  }
}
