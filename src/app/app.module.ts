import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
  ],
  declarations: [
    PageNotFoundComponent,
    AppComponent
  ],
  bootstrap: [AppComponent],
  providers: []
})
export class AppModule { }
