import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { NavigationStart, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { filter } from 'rxjs/operators';
import { FormActionsService } from '../../_services/form-actions.service';
import { Resource } from '../../_models/resource';
import { NotificationService } from '../../_services/notification.service';

@Component({
  selector: 'app-form-actions',
  templateUrl: './form-actions.component.html',
  styleUrls: ['./form-actions.component.scss'],
})
export class FormActionsComponent implements OnInit, OnDestroy {
  @Input() resource: Resource;
  @Input() formId: string;

  hasInputsChanged = false;
  subscription: Subscription[] = [];

  constructor(
    private formActionsService: FormActionsService,
    private notificationService: NotificationService,
    private router: Router,
    private translateService: TranslateService
  ) {
    this.subscription.push(
      // @ts-ignore
      this.router.events.subscribe((event: any) => {
        if (event instanceof NavigationStart && this.hasInputsChanged && !event.url.includes('#')) {
          this.notificationService
            .prompt({
              title: this.translateService.instant('strings.unsavedChanges.warningTitle'),
              message: this.translateService.instant('strings.unsavedChanges.warningMessage'),
              buttonCancelText: this.translateService.instant('strings.unsavedChanges.cancel'),
              buttonDeclineText: this.translateService.instant('strings.unsavedChanges.discard'),
              buttonConfirmText: this.translateService.instant('strings.unsavedChanges.save'),
              minWidth: 580,
            })
            .subscribe((result) => {
              if (result === 'CONFIRM') {
                this.saveForm();
              }
              if (result === 'DECLINE') {
                this.formActionsService.resetInputChange(this.formId);
                this.router.navigate([event.url]);
              }
            });
        }
      })
    );
  }

  ngOnInit(): void {
    this.subscription.push(
      this.formActionsService
        .getInputChange()
        .pipe(filter(({ formId }) => this.formId === formId))
        .subscribe((response: any) => {
          this.hasInputsChanged = response.inputChange;
        })
    );
  }

  resetForm(): void {
    this.notificationService
      .prompt({
        title: this.translateService.instant('actionSureDiscardChanges'),
        message: this.translateService.instant('actionLooseChanges'),
        buttonDeclineText: this.translateService.instant('captions.actionCancel'),
        buttonConfirmText: this.translateService.instant('captions.actionConfirm'),
      })
      .subscribe((result) => {
        if (result) {
          if (result === 'CONFIRM') {
            this.formActionsService.setDiscard(this.formId);
            this.hasInputsChanged = false;
          }
        }
      });
  }

  saveForm(): void {
    this.formActionsService.setSave(this.formId, this.resource);
  }

  ngOnDestroy(): void {
    this.subscription.forEach((subscription) => subscription.unsubscribe());
  }
}
