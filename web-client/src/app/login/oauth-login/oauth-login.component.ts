import {Component, OnDestroy} from '@angular/core';
import {LoginWithFacebookUseCase} from '../../domain/usecases/login/login-with-facebook-use-case';
import {FacebookOAuthService} from '../../services/facebook-o-auth.service';
import {flatMap} from 'rxjs/operators';
import {Subscription} from 'rxjs';
import {LoginWithGoogleUseCase} from '../../domain/usecases/login/login-with-google-use-case';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Router} from '@angular/router';

@Component({
  selector: 'app-oauth-login',
  templateUrl: './oauth-login.component.html',
  styleUrls: ['./oauth-login.component.scss']
})
export class OAuthLoginComponent implements OnDestroy {

  private loginSub: Subscription;

  constructor(
    private loginWithFacebookUseCase: LoginWithFacebookUseCase,
    private loginWithGoogleUseCase: LoginWithGoogleUseCase,
    private fbService: FacebookOAuthService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
  }

  onFacebookButtonClicked() {
    this.loginSub = this.fbService.loginAndGetToken()
      .pipe(
        flatMap((token) => this.loginWithFacebookUseCase.buildAction(token)),
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

  onGoogleButtonClicked() {
    this.loginSub = this.loginWithGoogleUseCase.buildAction()
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

  ngOnDestroy(): void {
    if (this.loginSub) {
      this.loginSub.unsubscribe();
    }
  }
}
