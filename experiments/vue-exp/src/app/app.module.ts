import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SomethingComponent } from './something/something.component';
import {YoupiComponent} from './youpi/youpi.component';

import { WrapperDirective } from './wrapper.directive';


@NgModule({
  declarations: [
    AppComponent,
    SomethingComponent,
    WrapperDirective,
    YoupiComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
