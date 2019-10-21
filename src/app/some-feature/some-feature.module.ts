import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SomeComponentComponent} from './some-component/some-component.component';
import {SomeFeatureRoutingModule} from './some-feature-routing.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {FeatureInterceptor} from './feature.interceptor';



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
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: FeatureInterceptor,
      multi: true
    }
  ],
})
export class SomeFeatureModule { }
