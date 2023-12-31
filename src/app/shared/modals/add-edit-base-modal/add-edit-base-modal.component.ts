import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, Inject, OnDestroy, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import {
  ADD_MODAL_NARROW,
  ADD_MODAL_WIDE,
  BREAKPOINTS,
  ADD_EDIT_FORM_ID,
} from '../../../app.constants';
import { FormActionsService } from '../../../_services/form-actions.service';
import { NotificationService } from '../../../_services/notification.service';

@Component({
  selector: 'app-add-edit-base-modal',
  templateUrl: './add-edit-base-modal.component.html',
  styleUrls: ['./add-edit-base-modal.component.scss'],
})
export class AddEditBaseModalComponent implements OnInit, OnDestroy {
  @ViewChild('addEditResource', { read: ViewContainerRef })
  addEditResource: ViewContainerRef;
  subscription: Subscription[] = [];
  modalWidth: string;
  formId = ADD_EDIT_FORM_ID;

  constructor(
    public dialogRef: MatDialogRef<AddEditBaseModalComponent>,
    public breakpointObserver: BreakpointObserver,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formActionsService: FormActionsService,
    private notificationService: NotificationService,
    private translateService: TranslateService
  ) {}

  ngOnInit(): void {
    if (this.data.formId) {
      this.formId = this.data.formId;
    }
    if (this.data.service) {
      this.subscription.push(
        this.data.service.getById(this.data.resource.uuid).subscribe({
          next: (response: any) => {
            this.data.resource = response;
            setTimeout(() => this.createComponent());
          },
          error: (err: any) => {
            this.notificationService.error(err);
          },
          complete: () => {},
        })
      );
    } else {
      setTimeout(() => this.createComponent());
    }

    this.subscription.push(
      this.formActionsService
        .getCloseFormModal()
        .pipe(filter(({ formId }) => this.formId === formId))
        .subscribe((response: any) => {
          if (response.closeModal) {
            this.dialogRef.close({
              close: true,
            });
          }
        })
    );

    this.subscription.push(
      this.breakpointObserver.observe([`(min-width: ${BREAKPOINTS.md}px)`]).subscribe((state) => {
        this.modalWidth = state.matches ? ADD_MODAL_WIDE : ADD_MODAL_NARROW;
        if (this.dialogRef) {
          this.dialogRef.updateSize(this.modalWidth);
        }
      })
    );

    this.subscription.push(this.dialogRef.beforeClosed().subscribe(() => this.discard()));
  }

  createComponent(): void {
    const createdComponent: any = this.addEditResource.createComponent(this.data.component);
    createdComponent.instance.formId = this.formId;
    if (this.data.resource) {
      createdComponent.instance.selectedResource = this.data.resource;
    }
  }

  save(): void {
    this.formActionsService.setSave(this.formId, this.data.resource ?? null);
  }

  discard(): void {
    this.formActionsService.setDiscard(this.formId);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  archive(): void {}

  delete(): void {
    this.notificationService
      .confirm({
        title: this.translateService.instant('strings.headingConfirmDeletion'),
        message: this.translateService
          .instant('strings.confirmationDeleteEntity')
          .replace('%s', this.data.context),
        buttonDeclineText: this.translateService.instant('captions.actionCancel'),
        buttonConfirmText: this.translateService.instant('captions.actionDelete'),
      })
      .subscribe((action) => {
        if (action === 'CONFIRM') {
          const items = [this.data.resource.uuid];
          this.subscription.push(
            this.data.service.delete(items).subscribe((response: any) => {
              if (response.length) {
                this.notificationService.success(`${this.data.context} deleted`);
                this.dialogRef.close();
              } else {
                this.notificationService.error(`${this.data.context} not deleted`);
              }
            })
          );
        }
      });
  }

  ngOnDestroy(): void {
    this.subscription.forEach((subscription) => subscription.unsubscribe());
  }
}
