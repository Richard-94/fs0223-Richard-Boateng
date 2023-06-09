import { Injectable } from '@angular/core';
import { Validator, FormGroup, ValidatorFn, ValidationErrors, AbstractControl} from '@angular/forms';

export const matchValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const password = control.get('password')?.value;
  const confirmation = control.get('confirmation')?.value;

  if (password === confirmation) {
    return null;
  } else {
    return { passwordsDontMatch: true };
  }
};
