import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { DynamicFormModule } from '../shared/dynamic-form/dynamic-form.module';
import { ReportsRoutingModule } from './reports-routing.module';
import { MaterialModule } from '../material.module';
import { ReportsFiltersComponent } from './reports-filters/reports-filters.component';
import { ReportsListComponent } from './reports-list/reports-list.component';
import { ReportsComponent } from './reports.component';
import { ReportsRegionSummaryComponent } from './reports-region-summary/reports-region-summary.component';
import { ReportsOfficerSummaryComponent } from './reports-officer-summary/reports-officer-summary.component';

@NgModule({
  declarations: [
    ReportsComponent,
    ReportsListComponent,
    ReportsFiltersComponent,
    ReportsRegionSummaryComponent,
    ReportsOfficerSummaryComponent,
  ],
  imports: [CommonModule, ReportsRoutingModule, MaterialModule, SharedModule, DynamicFormModule],
})
export class ReportsModule {}
