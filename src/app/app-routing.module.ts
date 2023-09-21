import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./core/components/login/login.component";
import {RegisterComponent} from "./core/components/register/register.component";
import {HomeComponent} from "./core/components/home/home.component";
import {ClassesComponent} from "./skill-forge/user/components/classes/classes.component";
import {WorkInProgressComponent} from "./shared/components/work-in-progress/work-in-progress.component";
import {AgendaComponent} from "./skill-forge/user/components/agenda/agenda.component";

const routes: Routes = [
  { path : 'login', component : LoginComponent },
  { path : 'register', component : RegisterComponent },
  { path : 'courses', component : ClassesComponent },
  { path : 'agenda', component : AgendaComponent },
  { path : 'home', component : HomeComponent },
  { path : '*', component : WorkInProgressComponent },
  { path : '', component : HomeComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
