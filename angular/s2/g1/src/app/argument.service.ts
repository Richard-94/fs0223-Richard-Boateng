import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArgumentService {
  private mySubject = new Subject<[]>();

  constructor() { }

  getSubject(): Subject<[]> {
    return this.mySubject;
  }
}
