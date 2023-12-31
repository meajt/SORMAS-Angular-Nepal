import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { DynamicFormModule } from '../dynamic-form/dynamic-form.module';
import { ContactFiltersComponent } from './contact-filters.component';

@NgModule({
  imports: [CommonModule, DynamicFormModule, TranslateModule],
  declarations: [ContactFiltersComponent],
  exports: [ContactFiltersComponent],
})
export class ContactFiltersModule {}
