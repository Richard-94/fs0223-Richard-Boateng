import { Injectable } from '@angular/core';
import { AsyncValidator, AbstractControl, ValidationErrors } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment.development';
import { Router } from '@angular/router';
import { Template } from 'src/app/form/template';

@Injectable({ providedIn: 'root' })
export class UniqueValidatorService implements AsyncValidator {
  address = environment.address;
  headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  constructor(private http: HttpClient, private router: Router) { }

  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    const value = control.value;

    // Make an HTTP request to check uniqueness
    return this.http.get<string>(`${this.address}/${value}`, { headers: this.headers }).pipe(
      map(responseValue => {
        console.log(responseValue);
        if (responseValue === value) {
          // Value is not unique, return validation error
          return { unique: !true };
        }

        // Value is unique, return null to indicate no validation errors
        return null;
      }),
      catchError(error => {
        console.error('Error while making the HTTP request:', error);
        return of(null);
      })
    );
  }

}
