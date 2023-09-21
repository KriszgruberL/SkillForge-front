import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SharedModule} from "./shared/shared.module";
import {CoreModule} from "./core/core.module";
import {FormlyModule} from "@ngx-formly/core";
import {ReactiveFormsModule} from "@angular/forms";
import {FormlyPrimeNGModule} from "@ngx-formly/primeng";
import {HttpClient} from "@angular/common/http";
import { ClassesComponent } from './skill-forge/user/components/classes/classes.component';
import { AgendaComponent } from './skill-forge/user/components/agenda/agenda.component';
import {FullCalendarModule} from "@fullcalendar/angular";
import {EventService} from "./skill-forge/services/event.service";

@NgModule({
  declarations: [
    AppComponent,
    ClassesComponent,
    AgendaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    ReactiveFormsModule,
    FormlyModule.forRoot(),
    FormlyPrimeNGModule,
    FullCalendarModule,
  ],
  providers: [
    HttpClient,
    EventService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
