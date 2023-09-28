import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SharedModule} from "./shared/shared.module";
import {CoreModule} from "./core/core.module";
import {FormlyModule} from "@ngx-formly/core";
import {HTTP_INTERCEPTORS, HttpClient} from "@angular/common/http";
import {EventService} from "./skill-forge/services/event.service";
import {AgendaComponent} from "./skill-forge/user/components/agenda/agenda.component";
import {ClassComponent} from "./skill-forge/user/components/class/class.component";
import {CommonModule} from "@angular/common";
import {PrimengModule} from "./shared/primeng.module";
import {ClassService} from "./skill-forge/services/class.service";
import {InstitutionService} from "./skill-forge/services/institution.service";
import {ProgressBarModule} from "primeng/progressbar";
import {DividerModule} from "primeng/divider";
import {PaginatorModule} from "primeng/paginator";
import {DetailClassComponent} from "./skill-forge/user/components/class/detail-class/detail-class.component";
import {DialogService, DynamicDialogConfig} from "primeng/dynamicdialog";
import {ScrollPanelModule} from "primeng/scrollpanel";
import { AddClassComponent } from './skill-forge/user/components/class/add-class/add-class.component';
import {AuthInterceptor} from "./shared/interceptors/AuthInterceptor";
import {MessageService} from "primeng/api";

@NgModule({
  declarations: [
    AppComponent,
    AgendaComponent,
    ClassComponent,
    DetailClassComponent,
    AddClassComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    FormlyModule.forRoot(),
    CommonModule,
    PrimengModule,
  ],
  providers: [
    HttpClient,
    EventService,
    ClassService,
    InstitutionService,
    DialogService,
    MessageService,
    DynamicDialogConfig,
    { provide : HTTP_INTERCEPTORS, useClass : AuthInterceptor, multi : true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
