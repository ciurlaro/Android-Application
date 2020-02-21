import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {LoginGuard} from './guards/login-guard.service';
import {HomeGuard} from './guards/home.guard';
import {ProfileComponent} from './home/profile/profile.component';
import {TournamentDetailComponent} from './home/tournament-detail/tournament-detail.component';


const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent, canActivate: [HomeGuard]},
  {path: 'tournament/:id', component: TournamentDetailComponent, canActivate: [HomeGuard]},
  {path: 'profile', component: ProfileComponent, canActivate: [HomeGuard]},
  {path: 'login', component: LoginComponent, canActivate: [LoginGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
