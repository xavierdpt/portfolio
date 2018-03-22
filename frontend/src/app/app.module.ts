import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule, Routes} from '@angular/router';


import { AppComponent } from './app.component';
import {Item} from './item/item.component';
import {NameInput} from './nameinput/naminput.component';
import {Pipe} from './pipe/pipe.component';
import {PipoPipe} from './pipe/pipo.pipe';
import {Settings} from './settings/settings.component';
import {Lifecycle} from './lifecycle/lifecycle.component';
import {Secret} from './secret/secret.component';
import {PageNotFound} from './pnf/pnf.component';
import {HomeComponent} from './home/home.component';

const appRoutes : Routes = [
  {path:'home', component:AppComponent}
  {path:'secret', component: Secret},
  {path:'', redirectTo: '/home', pathMatch: 'full'},
  {path:'**', component: PageNotFound}
];

@NgModule({
  declarations: [
    AppComponent,
    Item,
    NameInput,
    Pipe,
    PipoPipe,
    Settings,
    Lifecycle,
    Secret,
    PageNotFound,
    HomeComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpModule, RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [HomeComponent]
})
export class AppModule { }
