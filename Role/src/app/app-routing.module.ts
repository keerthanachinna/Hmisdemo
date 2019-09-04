import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NewregComponent } from './newreg/newreg.component';
import { HomeComponent} from './home/home.component';


const routes: Routes = [
{path: 'login',component:LoginComponent},
{path: 'nreg',component:NewregComponent},
{path: 'home',component:NewregComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
