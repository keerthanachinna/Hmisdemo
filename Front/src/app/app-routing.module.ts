import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemComponent } from './item/item.component'
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { DetailsComponent } from './details/details.component';
import {NameComponent } from './name/name.component';
import { NewoneComponent } from './newone/newone.component';
import {ViewComponent } from './view/view.component';
import { viewModel } from './view/view.model';
import { EditComponent} from './edit/edit.component';
import { BillingComponent } from './billing/billing.component';
import { BillcComponent } from './billc/billc.component';
import { CurrentComponent } from './current/current.component';
import { BillviewComponent } from './billview/billview.component';
import { BilleditComponent } from './billedit/billedit.component';
import { DemoComponent } from './demo/demo.component';
import { CheckvalidationComponent } from './checkvalidation/checkvalidation.component';
import { EthukuComponent } from './ethuku/ethuku.component';



const routes: Routes = [
  { path :'item', component: ItemComponent },
  { path :'details', component: DetailsComponent },
  { path :'newone', component: NewoneComponent },
  { path :'name', component: NameComponent },
  { path :'view/:id', component: ViewComponent},
  { path :'edit/:id', component: EditComponent},




  { path :'bill', component: BillingComponent },
  { path :'billc', component: BillcComponent },
  
  { path :'current', component: CurrentComponent },
  { path :'billview/:', component: BillviewComponent },
  { path :'billedit/:', component: BilleditComponent },
  { path :'demo', component: DemoComponent },
  { path :'check', component: CheckvalidationComponent },
  { path :'ethuku', component: EthukuComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 it: viewModel = new viewModel();
 id:any;
 }
