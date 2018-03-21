import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import {Item} from './item/item.component';
import {NameInput} from './nameinput/naminput.component';

@NgModule({
  declarations: [
    AppComponent,
    Item,
    NameInput
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
