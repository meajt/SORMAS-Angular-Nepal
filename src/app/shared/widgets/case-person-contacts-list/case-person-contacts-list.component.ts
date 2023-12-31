import { Component, OnDestroy, OnInit } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { ADD_MODAL_MAX_WIDTH, SentResourceTypes } from '../../../app.constants';
import { ContactDto } from '../../../_models/contactDto';
import { PersonDto } from '../../../_models/personDto';
import { FormActionsService } from '../../../_services/form-actions.service';
import { SendResourceService } from '../../../_services/send-resource.service';
import { CasePersonContactAddEditComponent } from '../../case-person-contact-add-edit/case-person-contact-add-edit.component';
import { FormElementBase } from '../../dynamic-form/types/form-element-base';

@Component({
  selector: 'app-case-person-contacts-list',
  templateUrl: './case-person-contacts-list.component.html',
  styleUrls: ['./case-person-contacts-list.component.scss'],
})
export class CasePersonContactsListComponent implements OnDestroy, OnInit {
  config: FormElementBase<any>;
  group: UntypedFormGroup;
  formId: string;

  person: PersonDto;
  contacts: any[] = [];
  subscriptions: Subscription[] = [];

  constructor(
    private sendResourceService: SendResourceService,
    private formActionsService: FormActionsService,
    private translateService: TranslateService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.subscriptions.push(
      this.sendResourceService.getResource().subscribe((response: any) => {
        if (
          response.fromComponent === SentResourceTypes.PERSON_DATA ||
          response.fromComponent === SentResourceTypes.EVENT_PARTICIPANT_DATA
        ) {
          this.person = response.resource?.person || response.resource;
          this.contacts = JSON.parse(JSON.stringify(this.person.personContactDetails));
        }
      })
    );
    this.subscriptions.push(
      this.formActionsService
        .getDiscard()
        .pipe(filter(({ formId }) => this.formId === formId))
        .subscribe(() => {
          this.contacts = JSON.parse(JSON.stringify(this.person.personContactDetails));
        })
    );
  }

  newContact(): void {
    this.openModal({
      title: this.translateService.instant('strings.entityPersonContactDetail'),
    });
  }

  editContact(event: ContactDto): void {
    this.openModal({
      title: this.translateService.instant('strings.entityPersonContactDetail'),
      resource: event,
    });
  }

  deleteContact(contact: ContactDto): void {
    this.contacts = this.contacts.filter((item) => item !== contact);
    this.group.get(this.config.key)?.setValue(this.contacts);
    this.formActionsService.setInputChange(this.formId, this.config.key, true);
  }

  openModal(data: any): void {
    const dialogRef = this.dialog.open(CasePersonContactAddEditComponent, {
      maxWidth: ADD_MODAL_MAX_WIDTH,
      data,
    });
    this.subscriptions.push(
      dialogRef.afterClosed().subscribe(({ resource, deleteResource } = {}) => {
        this.formActionsService.setDiscard(this.formId);
        if (!resource) {
          return;
        }
        if (deleteResource) {
          this.deleteContact(resource);
          this.group.get(this.config.key)?.setValue(this.contacts);
          return;
        }
        if (data.resource) {
          const target = this.contacts.find((item) => item.uuid === data.resource.uuid);
          Object.keys(resource).forEach((key) => {
            target[key] = resource[key as keyof ContactDto];
          });
        } else {
          this.contacts.push(resource);
        }
        this.contacts = JSON.parse(JSON.stringify(this.contacts));
        this.group.get(this.config.key)?.setValue(this.contacts);
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
