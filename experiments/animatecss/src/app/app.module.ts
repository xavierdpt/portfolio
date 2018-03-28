import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { BoxComponent } from './box.component';
import {EffectsComponent} from './effects.component';
import {RecursiveComponent} from './recursive.component';
import {DepthComponent} from './depth.component';

@NgModule({
  declarations: [
    AppComponent,
    BoxComponent,
    EffectsComponent,
    RecursiveComponent,
    DepthComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
