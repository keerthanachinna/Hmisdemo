import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OiComponent } from './oi/oi.component';
import { EnaComponent } from './ena/ena.component';

@NgModule({
  declarations: [
    AppComponent,
    OiComponent,
    EnaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
