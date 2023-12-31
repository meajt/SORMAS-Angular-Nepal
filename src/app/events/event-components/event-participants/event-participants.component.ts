import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { Filter, NavItem, TableColumn } from '../../../_models/common';
import { CONFIG_CASES } from '../../../_constants/storage';
import { defaultColumnDefs } from './event-participants-list-table-data';
import { EventParticipantService } from '../../../_services/api/event-participant.service';
import { actionsBulkEditDefs } from './event-participants-list-actions-data';
import { EVENT_PARTICIPANTS_FILTERS_FORM_ID } from '../../../app.constants';
import { FormBase } from '../../../shared/dynamic-form/types/form-element-base';
import { FORM_DATA_EVENT_PARTICIPANTS_FILTERS } from '../event-participants-filters/event-participants-filters-form-data';

@Component({
  selector: 'app-event-participants',
  templateUrl: './event-participants.component.html',
  styleUrls: ['./event-participants.component.scss'],
})
export class EventParticipantsComponent implements OnInit, OnDestroy {
  defaultColumns: TableColumn[] = [];
  configKey = CONFIG_CASES;
  actionsBulkEdit: NavItem[] = actionsBulkEditDefs;
  presetFilters: Filter[] = [];
  formId = EVENT_PARTICIPANTS_FILTERS_FORM_ID;
  filtersData: FormBase<any>[] = JSON.parse(JSON.stringify(FORM_DATA_EVENT_PARTICIPANTS_FILTERS));

  private subscription: Subscription[] = [];

  constructor(
    public eventParticipantService: EventParticipantService,
    private activatedRoute: ActivatedRoute,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.defaultColumns = defaultColumnDefs;
    this.subscription.push(
      this.activatedRoute.params.subscribe((params) => {
        this.presetFilters = [{ field: 'event', value: { uuid: params.eventId } }];
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.forEach((subscription) => subscription.unsubscribe());
  }
}
