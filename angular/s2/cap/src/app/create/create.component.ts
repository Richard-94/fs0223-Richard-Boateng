
import { Component, OnInit } from '@angular/core';
import { FetchService } from '../fetch.service';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Content } from '../content';
import { Subject, Subscription } from 'rxjs';
import { EventModificationService } from 'src/shared/event-modification.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  eventId: string | undefined;
  private modifySubscription!: Subscription;

  eventForm!: FormGroup;
  choose:string[]=['Sagra', 'Circo', 'Eventi Parochiali', 'Attività Sportiva', 'Musica', 'Teatro', 'Attività Didattica', 'Grest']
  types:string[]=[]
  clicked:boolean = false;



  constructor(private eventSvc:FetchService, private build:FormBuilder,
    private eventModification: EventModificationService){
      this.modifySubscription = this.eventModification.modify$.subscribe(eventId => {
        this.eventId = eventId;

      });
    }


  ngOnInit(): void {

    this.eventForm = this.build.group({
      authForm: this.build.group({
        title:this.build.control(''),
        place:this.build.control(''),
        date:this.build.control(''),
        time:this.build.control(''),
       price:this.build.control(''),
       address:this.build.control(''),
       description:this.build.control('')
        }),
        types: this.build.array([this.build.control('')]),
        images: this.build.array([this.build.control('')]),



    })
    this.eventForm.statusChanges.subscribe(status => console.log(status))
    this.eventForm.valueChanges.subscribe(value => console.log(value))




  }

  addImages(){
    let control = new FormControl(null);
    (this.eventForm.get('images') as FormArray).push(control);
  }

  getImages(){
    return (this.eventForm.get('images') as FormArray).controls
  }

  onCreatePost(data:Content) {

    const content: Content = {
      ...data,
      types: this.types
    };
    this.eventSvc.creatAndStorePost(content)

    alert('post sent')
    this.ngOnInit()
    this.types=[]
  }

  addEvent(type: string) {
    if (!this.types.includes(type)) {
      this.types.push(type);
    } else {
      alert('Category already selected');
    }

    console.log(this.types);
  }

  removeEvent(type:string){
    const index:number = this.types.indexOf(type);
    if(index!==-1){
      this.types.splice(index,1)
    }

  }

  ngOnDestroy() {
    this.modifySubscription.unsubscribe();
  }

}




