import {BrowserModule} from '@angular/platform-browser';
import {NgModule, Provider} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LoginComponent} from './login/login.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {ArenaTournamentRepositoryImplementation} from './data/repositories/arena-tournament-repository-implementation';

import {FirebaseAuthDatasource} from './data/datasources/firebase-auth-datasource';
import {FirebaseAuthDatasourceImplementation} from './core-impl/datasources/firebase-auth-datasource-implementation';
import {FirebaseStorageDatasource} from './data/datasources/firebase-storage-datasource';
import {FirebaseStorageDatasourceImplementation} from './core-impl/datasources/firebase-storage-datasource-implementation';
import {AngularFireModule} from '@angular/fire';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {OAuthLoginComponent} from './login/oauth-login/oauth-login.component';
import {HomeComponent} from './home/home.component';
import {TournamentCardComponent} from './home/tournament-card/tournament-card.component';
import {MatCardModule} from '@angular/material/card';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AuthInterceptor} from './http/auth.interceptor';
import {ArenaTournamentDatasource} from './data/datasources/arena-tournament-datasource';
import {ArenaTournamentDatasourceImplementation} from './core-impl/datasources/arena-tournament-datasource-implementation';
import {ArenaTournamentEndpoints} from './data/datasources/arena-tournament-endpoints';
import {ArenaTournamentEndpointsImplementation} from './core-impl/datasources/arena-tournament-endpoints-implementation';
import {ArenaTournamentRepository} from './domain/repositories/arena-tournament-repository';
import {firebaseConfig, hostToken, portToken, protocolToken} from '../environments/environment.common';
import {environment} from '../environments/environment';
import {MockInterceptor} from './http/mock.interceptor';
import {ProfileComponent} from './home/profile/profile.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {SnackbarComponent} from './snackbar/snackbar.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {NavbarComponent} from './navbar/navbar.component';
import {ChoosePasswordComponent} from './home/profile/choose-password/choose-password.component';
import {MatDialogModule} from '@angular/material/dialog';
import {CreateTournamentComponent} from './home/create-tournament/create-tournament.component';
import {MatSelectModule} from '@angular/material/select';
import {TournamentDetailComponent} from './home/tournament-detail/tournament-detail.component';


function providersBuilder(action: (providers: Provider[]) => void): Provider[] {
  const providers: Provider = [];
  action(providers);
  return providers;
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    OAuthLoginComponent,
    HomeComponent,
    TournamentCardComponent,
    ProfileComponent,
    SnackbarComponent,
    NavbarComponent,
    ChoosePasswordComponent,
    CreateTournamentComponent,
    TournamentDetailComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    AngularFireModule.initializeApp(firebaseConfig),
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    HttpClientModule,
    MatSnackBarModule,
    MatProgressBarModule,
    MatDialogModule,
    MatSelectModule
  ],
  providers: providersBuilder(providers => {
    providers.push({provide: ArenaTournamentRepository, useClass: ArenaTournamentRepositoryImplementation});
    providers.push({provide: FirebaseAuthDatasource, useClass: FirebaseAuthDatasourceImplementation});
    providers.push({provide: FirebaseStorageDatasource, useClass: FirebaseStorageDatasourceImplementation});
    providers.push({provide: ArenaTournamentDatasource, useClass: ArenaTournamentDatasourceImplementation});
    providers.push({provide: ArenaTournamentEndpoints, useClass: ArenaTournamentEndpointsImplementation});
    providers.push({provide: protocolToken, useValue: environment.protocol});
    providers.push({provide: portToken, useValue: environment.port});
    providers.push({provide: hostToken, useValue: environment.host});
    providers.push({provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true});
    if (environment.mock) {
      providers.push({provide: HTTP_INTERCEPTORS, useClass: MockInterceptor, multi: true});
    }
  }),
  bootstrap: [AppComponent]
})
export class AppModule {

}
