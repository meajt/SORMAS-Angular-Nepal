import { Component, OnDestroy, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { AddEditBaseModalComponent } from '../../../shared/modals/add-edit-base-modal/add-edit-base-modal.component';
import {
  CONFIGURATION_MODAL_WIDTH,
  EXPORT_TYPES,
  SMALL_NOTIFICATION_MODAL_WIDTH,
} from '../../../_constants/common';
import { TableAppearanceOptions } from '../../../_constants/enums';
import { NavItem, TableColumn } from '../../../_models/common';
import { ContinentDto } from '../../../_models/continentDto';
import { ContinentService } from '../../../_services/api/continent.service';
import { ContinentAddEditComponent } from '../continent-add-edit/continent-add-edit.component';
import { actionsBulkEditDefs } from './continents-actions-data';
import { defaultColumnDefs } from './continents-table-data';
import { NotificationService } from '../../../_services/notification.service';
import { TableComponent } from '../../../shared/table/table.component';
import { CONFIGURATION_CONTINENT_FILTERS_FORM_ID } from '../../../_constants/form-identifiers';
import { ExportService } from '../../../_services/api/export.service';
import { API_ROUTE_CONTINENTNS } from '../../../_constants/api';

@Component({
  selector: 'app-continent-list',
  templateUrl: './continent-list.component.html',
  styleUrls: ['./continent-list.component.scss'],
})
export class ContinentListComponent implements OnDestroy {
  defaultColumns: TableColumn[] = defaultColumnDefs;
  actionsBulkEdit: NavItem[] = actionsBulkEditDefs;
  tableAppearanceOptions = TableAppearanceOptions;
  formId = CONFIGURATION_CONTINENT_FILTERS_FORM_ID;

  private subscription: Subscription = new Subscription();

  @ViewChild(TableComponent) tableComponent: TableComponent;

  constructor(
    public continentService: ContinentService,
    private dialog: MatDialog,
    private translateService: TranslateService,
    private notificationService: NotificationService,
    private exportService: ExportService
  ) {}

  openEditContinentModal(continent: ContinentDto): void {
    const dialogRef = this.dialog.open(AddEditBaseModalComponent, {
      maxWidth: CONFIGURATION_MODAL_WIDTH,
      data: {
        title: this.translateService.instant('strings.headingEditContinent'),
        component: ContinentAddEditComponent,
        resource: continent,
        archive: true,
      },
    });

    this.subscription.add(
      dialogRef.afterClosed().subscribe((result) => {
        if (result) {
          this.tableComponent.getResources(true);
        }
      })
    );
  }

  openAddContinentModal(): void {
    const dialogRef = this.dialog.open(AddEditBaseModalComponent, {
      maxWidth: CONFIGURATION_MODAL_WIDTH,
      data: {
        title: this.translateService.instant('actionAddNewContinent'),
        component: ContinentAddEditComponent,
      },
    });

    this.subscription.add(
      dialogRef.afterClosed().subscribe((result) => {
        if (result) {
          this.tableComponent.getResources(true);
        }
      })
    );
  }

  export(): void {
    this.notificationService.prompt({
      title: this.translateService.instant('captions.exportBasic'),
      message: this.translateService.instant('strings.infoDownloadExport'),
      maxWidth: SMALL_NOTIFICATION_MODAL_WIDTH,
    });

    this.exportService.executeExport(EXPORT_TYPES.BASIC, API_ROUTE_CONTINENTNS.EXPORT);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
