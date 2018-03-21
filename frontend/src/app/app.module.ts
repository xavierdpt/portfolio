import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import {Item} from './item/item.component';
import {NameInput} from './nameinput/naminput.component';
import {Pipe} from './pipe/pipe.component';
import {PipoPipe} from './pipe/pipo.pipe';
import {Settings} from './settings/settings.component';
import {Lifecycle} from './lifecycle/lifecycle.component';

@NgModule({
  declarations: [
    AppComponent,
    Item,
    NameInput,
    Pipe,
    PipoPipe,
    Settings,
    Lifecycle
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
