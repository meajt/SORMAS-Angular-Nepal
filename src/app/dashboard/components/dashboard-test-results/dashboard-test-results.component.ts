import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Filter } from '../../../_models/common';
import { DashboardTestResultsService } from '../../../_services/api/dashboard-test-results.service';
import { FilterService } from '../../../_services/filter.service';
import { NotificationService } from '../../../_services/notification.service';

@Component({
  selector: 'app-dashboard-test-results',
  templateUrl: './dashboard-test-results.component.html',
  styleUrls: ['./dashboard-test-results.component.scss'],
})
export class DashboardTestResultsComponent implements OnInit, OnDestroy {
  testResults: any;
  subscriptions: Subscription[] = [];
  filters: Filter[] = [];
  sumTestResults = 0;

  constructor(
    private dashboardTestResultsService: DashboardTestResultsService,
    public filterService: FilterService,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    this.subscriptions.push(
      this.filterService.getFilters().subscribe((response) => {
        this.filters = response.filters;
        this.dashboardTestResultsService.getCalculated(this.filters).subscribe({
          next: (data: any) => {
            this.testResults = data;
            this.sumTestResults = this.sumOfTestResults();
          },
          error: (err: any) => {
            this.notificationService.error(err);
          },
          complete: () => {},
        });
      })
    );
  }

  sumOfTestResults(): number {
    return (
      (this.testResults.POSITIVE || 0) +
      (this.testResults.NEGATIVE || 0) +
      (this.testResults.PENDING || 0) +
      (this.testResults.INDETERMINATE || 0)
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
