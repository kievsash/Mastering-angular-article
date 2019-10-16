import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SomeComponentComponent} from './some-component/some-component.component';


const routes: Routes = [
  {path: '', redirectTo: 'feature1', pathMatch: 'full'},
  {path: 'feature1', component: SomeComponentComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SomeFeatureRoutingModule { }
