import {
  applyMiddleware,
  Store,
  combineReducers,
  compose,
  createStore
} from 'redux';

import { createLogger } from 'redux-logger';


import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule, Routes} from '@angular/router';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { NgReduxModule, NgRedux } from '@angular-redux/store';

import {TestModule} from './test.module';

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
import {SectionArchitectureComponent} from './sections/architecture.component';
import {Architecture1Component} from './architecture/architecture1.component';
import {SectionElementsComponent} from './sections/elements.component';
import {ElementAngularComponent} from './elements/angular.component';

import {ButtonModule} from 'primeng/button';
import {CodeHighlighterModule} from 'primeng/codehighlighter';

import {FooService} from './services/foo.service';
import { SecurityComponent } from './security/security.component';

const appRoutes : Routes = [
  {path:'home', component:AppComponent},
  {path:'security', component:SecurityComponent},
  {path:'secret', component: Secret},
  {path:'secret/:number', component: Secret},
  {path:'architecture', component: SectionArchitectureComponent},
  {path:'architecture/1', component: Architecture1Component},
  {path:'elements', component: SectionElementsComponent},
  {path:'elements/angular', component: ElementAngularComponent},
  {path:'', redirectTo: '/home', pathMatch: 'full'},
  {path:'**', component: PageNotFound}
];

interface IAppState { /* ... */ };

const rootReducer = (s)=>s;

export const store: Store<IAppState> = createStore(
  rootReducer,
  applyMiddleware(createLogger())
);

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
    HomeComponent,
    SectionArchitectureComponent,
    Architecture1Component,
    SectionElementsComponent,
    ElementAngularComponent,
    SecurityComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    TestModule,
    NgReduxModule,
    ButtonModule,
    CodeHighlighterModule
  ],
  providers:[FooService],
  bootstrap: [HomeComponent]
})
export class AppModule {
  constructor(ngRedux: NgRedux<IAppState>) {
    ngRedux.provideStore(store);
  }
}
