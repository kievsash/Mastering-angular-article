import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {SearchComponent} from './search/search.component';
import {HttpCallComponent} from './http-call/http-call.component';
import {SameRouteReloadComponent} from './same-route-reload/same-route-reload.component';


const routes: Routes = [
  // {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'search', component: SearchComponent},
  {path: 'httpOnInit', component: HttpCallComponent},
  {path: 'sameRoute', component: SameRouteReloadComponent},
  { path: 'feature',
    loadChildren: './some-feature/some-feature.module#SomeFeatureModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
