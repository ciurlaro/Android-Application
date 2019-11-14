import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AccountComponent} from './account/account.component';
import {HomeComponent} from './home/home.component';
import {BrowseComponent} from './browse/browse.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'account/signIn', component: AccountComponent},
  {path: 'browse-tournament', component: BrowseComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
