import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NavItem, TableColumn } from '../../_models/common';
import { EventDto } from '../../_models/eventDto';
import { EventService } from '../../_services/api/event.service';
import { defaultColumnDefs } from './events-list-table-data';
import { AddEditBaseModalComponent } from '../../shared/modals/add-edit-base-modal/add-edit-base-modal.component';
import {
  ADD_MODAL_MAX_WIDTH,
  CONFIG_EVENTS,
  HEADER_HEIGHT,
  EVENT_FILTERS_FORM_ID,
  MODAL_MEDIUM_WIDTH,
  ACTIONS_EVENT,
  SMALL_NOTIFICATION_MODAL_WIDTH,
  EXPORT_TYPES,
  API_ROUTE_EVENTS,
  EXPORT_CUSTOM_MODAL_WIDTH,
  SPECIFIC_SEARCH_TYPE,
  ADD_MODAL_WIDE,
} from '../../app.constants';
import { EventAddComponent } from '../event-add/event-add.component';
import { actionsBulkEditDefs, actionsMoreDefs } from './event-list-actions-data';
import { HelperService } from '../../_services/helper.service';
import { FormBase } from '../../shared/dynamic-form/types/form-element-base';
import { FORM_DATA_EVENT_FILTERS } from '../event-filters/event-filters-form-data';
import { viewOptionsDefs } from '../event-components/event-groups-list/event-groups-list-action-data';
import { EventGroupAddEventsModalComponent } from '../event-group-add-events-modal/event-group-add-events-modal.component';
import { EventGroupAddModalComponent } from '../event-group-add-modal/event-group-add-modal.component';
import { EventGroupService } from '../../_services/api/event-group.service';
import { NotificationService } from '../../_services/notification.service';
import { TableComponent } from '../../shared/table/table.component';
import { ExportService } from '../../_services/api/export.service';
import { SpecificSearchComponent } from '../../shared/modals/specific-search/specific-search.component';
import { ImportModalComponent } from '../../shared/modals/import-modal/import-modal.component';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss'],
})
export class EventsListComponent implements OnInit, OnDestroy {
  filtersData: FormBase<any>[] = JSON.parse(JSON.stringify(FORM_DATA_EVENT_FILTERS));
  tasks: EventDto[] = [];
  defaultColumns: TableColumn[] = [];
  actionsMore: NavItem[] = actionsMoreDefs;
  configKey = CONFIG_EVENTS;
  actionsBulkEdit: NavItem[] = actionsBulkEditDefs;
  routeParams = this.activeRoute.snapshot.queryParams;
  headerHeight = HEADER_HEIGHT;
  presetFilters: any;
  formIdFilters = EVENT_FILTERS_FORM_ID;
  actionsViewOption: NavItem[] = viewOptionsDefs;

  private subscriptions: Subscription[] = [];

  @ViewChild(TableComponent) tableComponent: TableComponent;

  constructor(
    public eventService: EventService,
    public helperService: HelperService,
    public exportService: ExportService,
    private dialog: MatDialog,
    private translateService: TranslateService,
    private activeRoute: ActivatedRoute,
    private router: Router,
    private eventGroupService: EventGroupService,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    this.defaultColumns = defaultColumnDefs;
    this.presetFilters = this.helperService.setQueryParamsInFilters(this.routeParams);
    this.subscriptions.push(
      this.activeRoute.queryParams.subscribe((params: Params) => {
        this.routeParams = params;
      })
    );
  }

  onActionSelected(event: any): void {
    switch (event) {
      case ACTIONS_EVENT.BASIC_EXPORT:
        this.exportBasicEvent();
        break;
      case ACTIONS_EVENT.DETAILED_EXPORT:
        this.exportDetailedEvent();
        break;
      case ACTIONS_EVENT.EVENT_SPECIFIC_SEARCH:
        this.specificSearchModal();
        break;
      default:
        break;
    }
  }

  openAddEventModal(): void {
    const dialogRef = this.dialog.open(AddEditBaseModalComponent, {
      maxWidth: ADD_MODAL_MAX_WIDTH,
      data: {
        title: this.translateService.instant('strings.headingCreateNewEvent'),
        component: EventAddComponent,
      },
    });

    this.subscriptions.push(
      dialogRef.afterClosed().subscribe((result) => {
        if (result) {
          // callback
        }
      })
    );
  }

  addNewEventGroup(events: any): void {
    const dialogRef = this.dialog.open(EventGroupAddModalComponent, {
      maxWidth: MODAL_MEDIUM_WIDTH,
    });

    this.subscriptions.push(
      dialogRef.afterClosed().subscribe((result) => {
        if (result) {
          this.linkEvents(result.response.requestResponse.uuid, events);
        }
      })
    );
  }

  linkEvents(eventGroupId: string, events: any[]): void {
    const eventsTmp: any = [];
    events.forEach((item: any) => {
      eventsTmp.push({
        uuid: item.uuid,
      });
    });

    this.subscriptions.push(
      this.eventGroupService.linkEvent(eventGroupId, eventsTmp).subscribe({
        next: () => {
          this.notificationService.success(
            this.translateService.instant('strings.messageEventLinkedToGroup')
          );
          this.tableComponent.getResources(true);
        },
        error: (err: any) => {
          this.notificationService.error(err);
        },
        complete: () => {},
      })
    );
  }

  onGroupEvents(events: any): void {
    const dialogRef = this.dialog.open(EventGroupAddEventsModalComponent, {
      maxWidth: MODAL_MEDIUM_WIDTH,
    });

    this.subscriptions.push(
      dialogRef.afterClosed().subscribe((result) => {
        if (result) {
          if (result.selectedEventGroup === null) {
            this.addNewEventGroup(events);
          } else {
            this.linkEvents(result.selectedEventGroup.uuid, events);
          }
        }
      })
    );
  }

  exportBasicEvent(): void {
    this.notificationService.prompt({
      title: this.translateService.instant('captions.exportBasic'),
      message: this.translateService.instant('strings.infoDownloadExport'),
      maxWidth: SMALL_NOTIFICATION_MODAL_WIDTH,
    });

    this.exportService.executeExport(EXPORT_TYPES.BASIC, API_ROUTE_EVENTS.EXPORT);
  }

  exportDetailedEvent(): void {
    this.notificationService.prompt({
      title: this.translateService.instant('captions.exportDetailed'),
      message: this.translateService.instant('strings.infoDownloadExport'),
      maxWidth: SMALL_NOTIFICATION_MODAL_WIDTH,
    });

    this.exportService.executeExport(EXPORT_TYPES.DETAILED, API_ROUTE_EVENTS.EXPORT);
  }

  specificSearchModal(): void {
    this.dialog.open(SpecificSearchComponent, {
      width: EXPORT_CUSTOM_MODAL_WIDTH,
      data: { type: SPECIFIC_SEARCH_TYPE.EVENT_SPECIFIC_SEARCH },
    });
  }

  openImportModal(): void {
    this.dialog.open(ImportModalComponent, {
      width: ADD_MODAL_WIDE,
      data: {
        title: 'strings.headingImportEvent',
        type: ACTIONS_EVENT.IMPORT,
        service: this.eventService,
      },
    });
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
