import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegComponent } from './reg/reg.component';
import { FormsModule } from '@angular/forms';

import {RouterModule, Routes } from '@angular/router';
import{ regService } from './reg/reg.service';
import{ regModel } from './reg/reg.Model';
import { HttpClientModule, HttpClient } from '@angular/common/http';
// import { ViewChild, ViewContainerRef } from '@angular/core';

@NgModule({
  declarations: [
    AppComponent,
    RegComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [regService],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
