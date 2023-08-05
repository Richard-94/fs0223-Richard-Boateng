import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventModificationService {
  private modifySubject: Subject<string> = new Subject<string>();

  modify$ = this.modifySubject.asObservable();

  emitModifyEvent(eventId: string) {
    this.modifySubject.next(eventId);
  }
}
