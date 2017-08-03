import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SlidesRouteNavigatorService } from './lib/slides-route-navigator/slides-route-navigator.service'

import { PageNotFoundComponent } from './not-found.component';
import { AppComponent } from './app.component';
import { SlidesModule } from './slides/slides.module';

const appRoutes: Routes = [
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    BrowserModule,
    SlidesModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    PageNotFoundComponent,
    AppComponent
  ],
  bootstrap: [AppComponent],
  providers: [SlidesRouteNavigatorService]
})
export class AppModule { }
