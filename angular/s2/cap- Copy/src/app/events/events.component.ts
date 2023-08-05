
import { Component, OnInit } from '@angular/core';
import { FetchService } from '../fetch.service';
import { Content } from '../content';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { EventModificationService } from 'src/shared/event-modification.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  loadEvents: Content[] = [];
  selectedEvent: Content | undefined;
  eventId!: string
  selectedEventId:any

  grest: Content[] = [];
  eduActivity: Content[] = [];
  sagra: Content[] = [];
  circo: Content[] = [];
  church: Content[] = [];
  sports: Content[] = [];
  music: Content[] = [];
  teather: Content[] = [];
  id!: number | undefined;

  error!: any;
  isFetching: boolean = false;
  private errorSub!: Subscription;
  eventForm: FormGroup;

  constructor(
    private eventSvc: FetchService,
    private router: Router,
    private eventModifications: EventModificationService,
    private formBuilder: FormBuilder
  ) {
    this.eventForm = this.formBuilder.group({
      authForm: this.formBuilder.group({
        title: this.formBuilder.control(''),
        place: this.formBuilder.control(''),
        date: this.formBuilder.control(''),
        time: this.formBuilder.control(''),
        price: this.formBuilder.control(''),
        address: this.formBuilder.control(''),
        description: this.formBuilder.control('')
      })
    });
  }

  ngOnInit(): void {
    this.errorSub = this.eventSvc.error.subscribe((errorMessage) => {
      this.error = errorMessage;
    });
    this.isFetching = true;
    this.eventSvc.fetchEvents().subscribe({
      next: (e) => {
        this.isFetching = false;
        this.loadEvents = e;
        console.log(this.loadEvents);
        this.grest = this.loadEvents.filter((event) => {
          return event.types && event.types.includes('Grest');
        }).map((event) => {
          return {
            ...event,
            types: event.types?.filter((type) => !this.shouldExcludeGrest(type))
          };
        });

        this.eduActivity = this.loadEvents.filter((event) => {
          return event.types && event.types.includes('Attività Didattica');
        }).map((event) => {
          return {
            ...event,
            types: event.types?.filter((type) => !this.shouldExcludeAttivitaDidattica(type))
          };
        });

        this.sagra = this.loadEvents.filter((event) => {
          return event.types && event.types.includes('Sagra');
        }).map((event) => {
          return {
            ...event,
            types: event.types?.filter((type) => !this.shouldExcludeSagra(type))
          };
        });

        this.circo = this.loadEvents.filter((event) => {
          return event.types && event.types.includes('Circo');
        });

        this.church = this.loadEvents.filter((event) => {
          return event.types && event.types.includes('Eventi Parochiali');
        }).map((event) => {
          return {
            ...event,
            types: event.types?.filter((type) => !this.shouldExcludeEventiParochiali(type))
          };
        });

        this.sports = this.loadEvents.filter((event) => {
          return event.types && event.types.includes('Attività Sportiva');
        });

        this.music = this.loadEvents.filter((event) => {
          return event.types && event.types.includes('Musica');
        });

        this.teather = this.loadEvents.filter((event) => {
          return event.types && event.types.includes('Teatro');
        });
      },
      error: (errorMessage) => {
        this.isFetching = false;
        this.error = errorMessage;
      }
    });
  }

  ngOnDestroy() {
    this.errorSub.unsubscribe();
  }


onHandleError(){
  this.error = null
}

modifyEvent(eventId: string) {
  // Emit the event ID through the eventModifications service or do any other necessary operations
  this.eventModifications.emitModifyEvent(eventId);

  // Perform other actions based on the event ID
  const selectedEvent = this.loadEvents.find(event => event.id === eventId);
  console.log(selectedEvent);

  if (selectedEvent) {
    this.selectedEvent = selectedEvent;
    console.log('Event selected for modification:', this.selectedEvent);
    this.router.navigate(['/create']);

    // Update the form values if eventForm is defined
    if (this.eventForm) {
      const authForm = this.eventForm.get('authForm');
      console.log('authForm:', authForm);

      if (authForm) {
        console.log('Setting form values:', {
          title: this.selectedEvent.authForm.title,
          place: this.selectedEvent.authForm.place,
          date: this.selectedEvent.authForm.date,
          time: this.selectedEvent.authForm.time,
          price: this.selectedEvent.authForm.price,
          address: this.selectedEvent.authForm.address,
          description: this.selectedEvent.authForm.description
        });
        authForm.setValue({
          title: this.selectedEvent.authForm.title,
          place: this.selectedEvent.authForm.place,
          date: this.selectedEvent.authForm.date,
          time: this.selectedEvent.authForm.time,
          price: this.selectedEvent.authForm.price,
          address: this.selectedEvent.authForm.address,
          description: this.selectedEvent.authForm.description
        });
      } else {
        console.log('authForm is not defined');
      }
    } else {
      console.log('eventForm is not defined');
    }
  } else {
    console.log('No event selected for modification');
  }
}



  shouldExcludeGrest(type: string) {
    return (
      type === 'Attività Didattica' ||
      type === 'Eventi Parochiali' ||
      type === 'Sagra' ||
      type === 'Circo' ||
      type === 'Musica' ||
      type === 'Teatro' ||
      type === 'Attività Sportiva'
    );
  }

  shouldExcludeAttivitaDidattica(type: string) {
    return (
      type === 'Eventi Parochiali' ||
      type === 'Sagra' ||
      type === 'Circo' ||
      type === 'Musica' ||
      type === 'Teatro' ||
      type === 'Attività Sportiva'
    );
  }

  shouldExcludeSagra(type: string) {
    return (
      type === 'Circo' ||
      type === 'Musica' ||
      type === 'Teatro' ||
      type === 'Attività Sportiva'
    );
  }

  shouldExcludeEventiParochiali(type: string) {
    return type === 'Sagra';
  }
}
