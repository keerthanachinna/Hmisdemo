import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BillingComponent } from './billing/billing.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import {DataTablesModule} from 'angular-datatables';

import { FormsModule } from '@angular/forms';

import {RouterModule, Routes } from '@angular/router';
import { BillcComponent } from './billc/billc.component';
import { billingModel } from './billing/billing.model';
import { billingService } from './billing/billing.service';
import { CurrentComponent } from './current/current.component';
import { BillviewComponent } from './billview/billview.component';
import { NewoComponent } from './newo/newo.component';
import { PgaeComponent } from './pgae/pgae.component';


@NgModule({
  declarations: [
    AppComponent,
    BillingComponent,
    BillcComponent,
    CurrentComponent,
    BillviewComponent,
    NewoComponent,
    PgaeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    DataTablesModule
  ],
  providers: [billingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
  