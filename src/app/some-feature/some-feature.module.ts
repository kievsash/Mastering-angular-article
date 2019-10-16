import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SomeComponentComponent} from './some-component/some-component.component';
import {SomeFeatureRoutingModule} from './some-feature-routing.module';
import {HttpClientModule} from '@angular/common/http';



@NgModule({
  declarations: [
    SomeComponentComponent
  ],
  imports: [
    CommonModule,
    SomeFeatureRoutingModule,
    HttpClientModule
  ],
  bootstrap: [
    SomeComponentComponent
  ]
})
export class SomeFeatureModule { }
