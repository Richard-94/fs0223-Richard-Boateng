import { Component } from '@angular/core';
import { Observable, delay } from 'rxjs';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AuthInterface } from '../auth-interface';
import { SignUp } from '../sign-up';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
  isLoginMode: boolean = true;
  isLoading: boolean = false;
  error!: string;

  constructor(private authSvc: AuthService, private router: Router) {}

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return; // form not submitted if it's invalid
    }

    console.log(form.value);
    const email = form.value.email;
    const password = form.value.password;

    let authObs: Observable<AuthInterface>;

    this.isLoading = true;

    if (this.isLoginMode) {
      authObs = this.authSvc.login(email, password);
    } else {
      const signUpData = new SignUp(
        form.value.name,
        form.value.lastname,
        form.value.username,
        form.value.password,
        form.value.email
      );
      authObs = this.authSvc.signUp(signUpData).pipe(delay(3000));
    }

    authObs.subscribe(
      (resData) => {
        console.log(resData);
        this.isLoading = false;
        this.router.navigate(['./create']);
      },
      (errorMessage) => {
        console.log(errorMessage);
        this.error = errorMessage;
        this.isLoading = false;
      }
    );

    form.reset();
  }
}
