import { Component } from '@angular/core';
import { FormBase } from '../../shared/dynamic-form/types/form-element-base';
import { CONFIGURATION_FACILITY_FILTERS_FORM_ID } from '../../_constants/form-identifiers';
import { FORM_DATA_FACILITY_FILTERS } from './facility-filters/facility-filters-form-data';

@Component({
  selector: 'app-facilities',
  templateUrl: './facilities.component.html',
  styleUrls: ['./facilities.component.scss'],
})
export class FacilitiesComponent {
  filtersData: FormBase<any>[] = JSON.parse(JSON.stringify(FORM_DATA_FACILITY_FILTERS));
  formId = CONFIGURATION_FACILITY_FILTERS_FORM_ID;
}
