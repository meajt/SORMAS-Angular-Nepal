import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '../material.module';
import { DynamicFormModule } from '../shared/dynamic-form/dynamic-form.module';
import { SharedModule } from '../shared/shared.module';
import { CaseEditComponent } from './case-edit/case-edit.component';
import { CaseFiltersComponent } from './case-filters/case-filters.component';
import { CaseGuideComponent } from './case-guide/case-guide.component';
import { CaseComponent } from './case/case.component';
import { CaseClinicalCourseComponent } from './case_components/case-clinical-course/case-clinical-course.component';
import { CaseContactsComponent } from './case_components/case-contacts/case-contacts.component';
import { CaseDetailsComponent } from './case_components/case-details/case-details.component';
import { CaseEpidemiologicalDataComponent } from './case_components/case-epidemiological-data/case-epidemiological-data.component';
import { CaseFollowUpComponent } from './case_components/case-follow-up/case-follow-up.component';
import { CaseHospitalizationComponent } from './case_components/case-hospitalization/case-hospitalization.component';
import { CasePersonComponent } from './case_components/case-person/case-person.component';
import { CasePortHealthComponent } from './case_components/case-port-health/case-port-health.component';
import { CaseSymptomsComponent } from './case_components/case-symptoms/case-symptoms.component';
import { CaseTherapyComponent } from './case_components/case-therapy/case-therapy.component';
import { ClinicalCourseAddComponent } from './case_components/clinical-course-add/clinical-course-add.component';
import { TherapyFiltersComponent } from './case_components/therapy-filters/therapy-filters.component';
import { CasesListComponent } from './cases-list/cases-list.component';
import { CasesRoutingModule } from './cases-routing.module';
import { CasesComponent } from './cases.component';
import { ClassificationRulesComponent } from './classification-rules/classification-rules.component';

@NgModule({
  declarations: [
    CasesComponent,
    CasesListComponent,
    CaseComponent,
    CaseDetailsComponent,
    CasePersonComponent,
    CaseHospitalizationComponent,
    CasePortHealthComponent,
    CaseSymptomsComponent,
    CaseEpidemiologicalDataComponent,
    CaseTherapyComponent,
    CaseFollowUpComponent,
    CaseClinicalCourseComponent,
    CaseContactsComponent,
    CaseFiltersComponent,
    CaseEditComponent,
    TherapyFiltersComponent,
    CaseGuideComponent,
    ClinicalCourseAddComponent,
    ClassificationRulesComponent,
  ],
  imports: [CommonModule, CasesRoutingModule, MaterialModule, SharedModule, DynamicFormModule],
})
export class CasesModule {}
