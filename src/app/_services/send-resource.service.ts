import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SendResourceService {
  private subject = new Subject<any>();

  setResource(resource: any, fromComponent: string): void {
    this.subject.next({ resource, fromComponent });
  }

  getResource(): Observable<any> {
    return this.subject.asObservable();
  }
}
