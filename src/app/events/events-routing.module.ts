import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsComponent } from './events.component';
import { EventsListComponent } from './events-list/events-list.component';
import { LeaveGuard } from '../_guards/leave-guard';
import { EventComponent } from './event/event.component';
import { EventDataComponent } from './event-components/event-data/event-data.component';
import { EventParticipantsComponent } from './event-components/event-participants/event-participants.component';
import { EventActionsComponent } from './event-components/event-actions/event-actions.component';
import { EventParticipantsProfileComponent } from './event-components/event-participants-profile/event-participants-profile.component';
import { EventGroupsComponent } from './event-components/event-groups/event-groups.component';
import { EventGroupProfileComponent } from './event-group-profile/event-group-profile.component';

const routes: Routes = [
  {
    path: '',
    component: EventsComponent,
    children: [
      { path: 'list', component: EventsListComponent },
      {
        path: 'event-groups/list',
        component: EventGroupsComponent,
        canDeactivate: [LeaveGuard],
      },
      {
        path: 'event/:eventId',
        component: EventComponent,
        children: [
          { path: 'details', component: EventDataComponent, canDeactivate: [LeaveGuard] },
          {
            path: 'participants',
            component: EventParticipantsComponent,
            canDeactivate: [LeaveGuard],
          },
          { path: 'actions', component: EventActionsComponent, canDeactivate: [LeaveGuard] },
          {
            path: 'participants-profile/:participantId',
            component: EventParticipantsProfileComponent,
            canDeactivate: [LeaveGuard],
          },
        ],
      },
    ],
  },
  {
    path: 'event-groups/:eventGroupId',
    component: EventGroupProfileComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventsRoutingModule {}
