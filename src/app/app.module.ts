import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ViewportinfoComponent } from './viewportinfo/viewportinfo.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewportinfoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
