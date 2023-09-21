import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./core/components/home/home.component";
import {WorkInProgressComponent} from "./shared/components/work-in-progress/work-in-progress.component";
import {AgendaComponent} from "./skill-forge/user/components/agenda/agenda.component";
import {ClassComponent} from "./skill-forge/user/components/class/class.component";


const routes: Routes = [
  { path : 'home', component : HomeComponent },
  { path : 'class', component : ClassComponent },
  { path : 'agenda', component : AgendaComponent },
  { path : '*', component : WorkInProgressComponent },
  { path : '', component : HomeComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
