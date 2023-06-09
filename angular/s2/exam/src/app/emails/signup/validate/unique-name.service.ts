import { Injectable } from '@angular/core';
import { AsyncValidator, AbstractControl, ValidationErrors } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment.development';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class UniqueValidatorService implements AsyncValidator {

  address = environment.address;

  constructor(private http: HttpClient,
    private router: Router) { }

  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    const value = control.value;

    // Make an HTTP request to check uniqueness
    return this.http.get<boolean>(` this.address

    ${value}`).pipe(
      map(isUnique => {
        if (!isUnique) {
          // Value is not unique, return validation error
          return { unique: true };
        }
        // Value is unique, return null
        return null;
      }),
      catchError(() => of(null)) // Handle errors and return null
    );
  }
}

