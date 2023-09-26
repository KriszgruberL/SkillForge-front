import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./core/components/home/home.component";
import {WorkInProgressComponent} from "./shared/components/work-in-progress/work-in-progress.component";
import {AgendaComponent} from "./skill-forge/user/components/agenda/agenda.component";
import {ClassComponent} from "./skill-forge/user/components/class/class.component";
import {DetailClassComponent} from "./skill-forge/user/components/class/detail-class/detail-class.component";
import {AddClassComponent} from "./skill-forge/user/components/class/add-class/add-class.component";


const routes: Routes = [
  { path : 'home', component : HomeComponent },
  { path : 'class', component : ClassComponent },
  { path : 'class/add', component : AddClassComponent },
  { path : 'class/:id', component : DetailClassComponent },
  { path : 'agenda', component : AgendaComponent },
  { path : '', component : HomeComponent , pathMatch : 'full'},
  { path : '**', component : WorkInProgressComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
