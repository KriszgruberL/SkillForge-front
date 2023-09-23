import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SharedModule} from "./shared/shared.module";
import {CoreModule} from "./core/core.module";
import {FormlyModule} from "@ngx-formly/core";
import {HttpClient} from "@angular/common/http";
import {EventService} from "./skill-forge/services/event.service";
import {AgendaComponent} from "./skill-forge/user/components/agenda/agenda.component";
import {FullCalendarComponent} from "@fullcalendar/angular";
import {ClassComponent} from "./skill-forge/user/components/class/class.component";
import {CommonModule} from "@angular/common";
import {PrimengModule} from "./shared/primeng.module";
import {ClassService} from "./skill-forge/services/class.service";
import {InstitutionService} from "./skill-forge/services/institution.service";
import {ProgressBarModule} from "primeng/progressbar";
import {DividerModule} from "primeng/divider";
import {PaginatorModule} from "primeng/paginator";

@NgModule({
  declarations: [
    AppComponent,
    AgendaComponent,
    ClassComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    FormlyModule.forRoot(),
    CommonModule,
    PrimengModule,
    ProgressBarModule,
    DividerModule,
    PaginatorModule
  ],
  providers: [
    HttpClient,
    EventService,
    ClassService,
    InstitutionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
