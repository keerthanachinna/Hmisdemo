import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TitleComponent} from './title/title.component';
import {MasterComponent} from './master/master.component';

const routes: Routes = [
  { path :'title', component: TitleComponent},
  { path :'master', component: MasterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
