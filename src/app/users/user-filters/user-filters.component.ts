import { Component } from '@angular/core';
import { FiltersFormComponent } from '../../shared/filters/filters-form/filters-form.component';

@Component({
  selector: 'app-user-filters',
  templateUrl: '../../shared/filters/filters-form/filters-form.component.html',
})
export class UserFiltersComponent extends FiltersFormComponent {}
