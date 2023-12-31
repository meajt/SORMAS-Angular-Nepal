import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsComponent } from './contacts.component';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { MaterialModule } from '../material.module';
import { SharedModule } from '../shared/shared.module';
import { DynamicFormModule } from '../shared/dynamic-form/dynamic-form.module';
import { ContactsRoutingModule } from './contacts-routing.module';
import { ContactAddComponent } from './contact-add/contact-add.component';
import { ContactComponent } from './contact/contact.component';
import { ContactDetailsComponent } from './contact-components/contact-details/contact-details.component';
import { ContactEpidemiologicalDataComponent } from './contact-components/contact-epidemiological-data/contact-epidemiological-data.component';
import { ContactPersonComponent } from './contact-components/contact-person/contact-person.component';
import { ContactFollowUpComponent } from './contact-components/contact-follow-up/contact-follow-up.component';

@NgModule({
  declarations: [
    ContactsComponent,
    ContactsListComponent,
    ContactAddComponent,
    ContactComponent,
    ContactDetailsComponent,
    ContactEpidemiologicalDataComponent,
    ContactPersonComponent,
    ContactFollowUpComponent,
  ],
  imports: [CommonModule, ContactsRoutingModule, MaterialModule, SharedModule, DynamicFormModule],
})
export class ContactsModule {}
