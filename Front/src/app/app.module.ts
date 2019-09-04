import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';
import { FormsModule } from '@angular/forms';

import {RouterModule, Routes } from '@angular/router';
import{ itemService } from './item/item.service';
import{ itemModel } from './item/item.Model';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import {DataTablesModule} from 'angular-datatables';
import { detailsModel } from './details/details.model';

import { DetailsComponent } from './details/details.component';
import * as jquery from 'jquery';
import { NewoneComponent } from './newone/newone.component';
import { NameComponent } from './name/name.component';
import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';

import { BillingComponent } from './billing/billing.component';
import { BillcComponent } from './billc/billc.component';
import { CurrentComponent } from './current/current.component';
import { BillviewComponent } from './billview/billview.component';
import { BilleditComponent } from './billedit/billedit.component';
import { DemoComponent } from './demo/demo.component';
import { CheckvalidationComponent } from './checkvalidation/checkvalidation.component';
import { PrintComponent } from './print/print.component';
import { EthukuComponent } from './ethuku/ethuku.component';
import {NgxPaginationModule} from 'ngx-pagination';
// import { MustMatchDirective } from './_helpers/must-match.directive';
// import {MatAutocompleteModule} from '@angular/material/autocomplete';

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    DetailsComponent,
    NewoneComponent,
    NameComponent,
    ViewComponent,
    EditComponent,
    NgxPaginationModule,
    BillingComponent,
    BillcComponent,
    CurrentComponent,
    BillviewComponent,
    BilleditComponent,
    DemoComponent,
    CheckvalidationComponent,
    PrintComponent,
    EthukuComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    DataTablesModule,
    // MatAutocompleteModule,
    
  ],
  providers: [itemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
