import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BillingComponent } from './billing/billing.component';
import { BillcComponent} from './billc/billc.component';
import {CurrentComponent } from './current/current.component';
import { BillviewComponent} from './billview/billview.component';
import{ PgaeComponent } from './pgae/pgae.component';


// import {}
const routes: Routes = [

  { path :'bill', component: BillingComponent },
  { path :'billc', component: BillcComponent },
  
  { path :'current', component: CurrentComponent },
  { path :'billview/:', component: BillviewComponent },
  { path :'page', component: PgaeComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
