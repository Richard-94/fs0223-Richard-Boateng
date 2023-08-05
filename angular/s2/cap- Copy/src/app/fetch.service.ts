import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Content } from './content';
import { Observable, Subject, delay, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FetchService {
  error = new Subject<string>();
  private modifyEventSubject: Subject<Content> = new Subject<Content>();
  modifyEvent$: Observable<Content> = this.modifyEventSubject.asObservable();
  address: string = 'https://concerts-102e8-default-rtdb.europe-west1.firebasedatabase.app/events.json';

  constructor(private httpClient: HttpClient) {}

  creatAndStorePost(data: Content) {
    return this.httpClient.post<Content>(this.address, data)
      .subscribe({
        next: (responseData: Content) => {
          //console.log(responseData);
        },
        error: (error) => {
          this.error.next(error.message);
        },
      });
  }

  fetchEvents() {
    return this.httpClient.get<Content[]>(this.address).pipe(delay(1000),
      map((responseData: Content[]) => {
        const eventArray = [];
        for (const key in responseData) {
          if (responseData.hasOwnProperty(key)) {
            eventArray.push({ ...responseData[key], id: key });
          }
        }
        console.log(eventArray);
        return eventArray;
      })
    );
  }

  modifyEvent(e: Content) {
    const url = `${this.address}/${e.id}`;

    return this.httpClient.put<Content>(url, e);
  }
}
