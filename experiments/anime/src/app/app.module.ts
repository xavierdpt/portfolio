import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { GalleryComponent } from './gallery/gallery.component';
import { TatataComponent } from './tatata/tatata.component';
import { SomethingComponent } from './something/something.component';
import { BoxModule } from 'shcmp';

const appRoutes: Routes = [
  { path: 'gallery', component: GalleryComponent },
  { path: 'tatata', component: TatataComponent },
  { path: 'something', component: SomethingComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    TatataComponent,
    SomethingComponent
  ],
  imports: [
    BrowserModule,
    BoxModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
