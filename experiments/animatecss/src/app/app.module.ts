import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import {EffectsComponent} from './effects.component';
import {RecursiveComponent} from './recursive.component';
import {DepthComponent} from './depth.component';

import { BoxModule } from 'shcmp';
import { KeyboardComponent } from './keyboard/keyboard.component';

@NgModule({
  declarations: [
    AppComponent,
    EffectsComponent,
    RecursiveComponent,
    DepthComponent,
    KeyboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BoxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
