import {Component, OnDestroy} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {LoginWithEmailPasswordUseCase} from '../domain/usecases/login/login-with-email-password-use-case';
import {Subscription} from 'rxjs';
import {ArenaTournamentFieldsMatcher} from './arena-tournament-fields-matcher';
import {flatMap} from 'rxjs/operators';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnDestroy {

  loginFormGroup: FormGroup;

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  passwordFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(6)
  ]);
  matcher = new ArenaTournamentFieldsMatcher();
  private loginSub: Subscription;

  constructor(
    private formBuilder: FormBuilder,
    private loginWithEmailPasswordUseCase: LoginWithEmailPasswordUseCase,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    this.loginFormGroup = this.formBuilder.group({
      email: this.emailFormControl,
      password: this.passwordFormControl
    });
  }

  onSubmit(data) {
    this.loginSub = this.loginWithEmailPasswordUseCase.buildAction(data)
      .pipe(
        flatMap(isLoginSuccessful => {
          if (isLoginSuccessful) {
            return this.router.navigateByUrl('home');
          } else {
            return this.snackBar.open('Something went wrong! Try again.', 'Dismiss', {
              duration: 2000
            }).afterDismissed();
          }
        })
      )
      .subscribe();
  }

  getPasswordError(): string {
    return this.passwordFormControl.hasError('required') ? 'You must enter a value' :
      this.passwordFormControl.hasError('minlength') ? `At least 6 chars` : '';
  }

  ngOnDestroy(): void {
    if (this.loginSub) {
      this.loginSub.unsubscribe();
    }
  }
}


