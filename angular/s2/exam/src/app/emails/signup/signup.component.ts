import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Template } from 'src/app/form/template';
import { matchValidator } from './validate/match';
import { UniqueValidatorService } from './validate/unique-name.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit{
  users:Template[]=[]

  isInputClicked = false;

  authForm = new FormGroup({
    name:new FormControl('', [
      Validators.required,
      Validators.pattern(/^[a-z]+$/i),

    ]),

    surname:new FormControl('',[
      Validators.required,
      Validators.pattern(/^[a-z]/)
    ]),

    password:new FormControl('',[
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(20),
      Validators.pattern(
        /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{8,}/
      ),

    ]),
    confirmation:new FormControl('',[
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(20),

    ]),
    telephoneNumber:new FormControl('',
    [Validators.required,
      Validators.minLength(10),
      Validators.maxLength(10),
      Validators.pattern(/^[0-9]/)
    ]),


    dateOfBirth:new FormControl('',[
      Validators.required,
      Validators.pattern(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/)
    ]),


    username:new FormControl('',
    [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(20),
      Validators.pattern(/^[a-z0-9]+$/)
    ],
    [this.uniqueValidator.validate.bind(this.uniqueValidator)])

  }, {validators: matchValidator })

  constructor(private uniqueValidator: UniqueValidatorService) { }


  ngOnInit(): void {
    const nameControl = this.authForm.get('name') as FormControl;
    const surnameControl = this.authForm.get('surname') as FormControl;

    nameControl.valueChanges.subscribe(value => {
      const uppercaseValue = value.toUpperCase();
      nameControl.setValue(uppercaseValue, { emitEvent: false });
    });

    surnameControl.valueChanges.subscribe(value => {
      const uppercaseValue = value.toUpperCase();
      surnameControl.setValue(uppercaseValue, { emitEvent: false });
    });
  }

}

