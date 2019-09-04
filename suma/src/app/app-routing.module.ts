import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OiComponent} from './oi/oi.component';
import { EnaComponent } from './ena/ena.component';

const routes: Routes = [

  { path :'oi', component: OiComponent },
  { path :'ena', component: EnaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
