import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsComponent } from './contacts.component';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { MaterialModule } from '../material.module';
import { SharedModule } from '../shared/shared.module';
import { DynamicFormModule } from '../shared/dynamic-form/dynamic-form.module';
import { ContactsRoutingModule } from './contacts-routing.module';
import { ContactAddComponent } from './contact-add/contact-add.component';

@NgModule({
  declarations: [ContactsComponent, ContactsListComponent, ContactAddComponent],
  imports: [CommonModule, ContactsRoutingModule, MaterialModule, SharedModule, DynamicFormModule],
})
export class ContactsModule {}
