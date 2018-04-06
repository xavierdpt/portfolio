import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SomethingComponent } from './something/something.component';
import { ScComponent } from './sc/sc.component';

@NgModule({
  declarations: [
    AppComponent,
    SomethingComponent,
    ScComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
