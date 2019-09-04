import { NgModule } from '@angular/core';
import {RouterModule, Routes  } from '@angular/router';
import { RegComponent } from './reg/reg.component'
import { HttpClientModule, HttpClient } from '@angular/common/http';
const routes: Routes = [
  { path :'regf', component: RegComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
