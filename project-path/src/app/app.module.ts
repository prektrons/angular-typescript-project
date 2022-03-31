import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemorouteComponent } from './demoroute/demoroute.component';
import { InputrouteComponent } from './inputroute/inputroute.component';

@NgModule({
  declarations: [
    AppComponent,
    DemorouteComponent,
    InputrouteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
