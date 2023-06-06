import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup,AbstractControl} from '@angular/forms';

@Component({
  selector: 'app-reactive-driven',
  templateUrl: './reactive-driven.component.html',
  styleUrls: ['./reactive-driven.component.scss']
})
export class ReactiveDrivenComponent {

  form!:FormGroup;

  constructor(private formBuilder: FormBuilder) {}


  ngOnInit(){
    this.form = this.formBuilder.group({
      powers:this.formBuilder.array([])
    })
  }

addPowers() {
  let newPowerControl: FormControl = this.formBuilder.control(null);
  (this.form.get('powers') as FormArray).push(newPowerControl);
}

  getPowers(){
    return(this.form.get('powers')as FormArray).controls;
  }






}


