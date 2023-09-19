import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AppComponent} from "../app.component";
import {PrimengModule} from "./primeng.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormlyModule} from "@ngx-formly/core";
import {CustomFieldType} from "./model/custom-field.type";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {WorkInProgressComponent} from "./components/work-in-progress/work-in-progress.component";


@NgModule({
  declarations: [
    CustomFieldType,
    WorkInProgressComponent
  ],
  imports: [
    CommonModule,
    PrimengModule,
    FormsModule,
    ReactiveFormsModule,
    FormlyModule,
    HttpClientModule,


  ], exports : [
    FormlyModule,
    PrimengModule
  ],
  providers: [
    HttpClient
  ],
  bootstrap: [
    AppComponent
  ]
})
export class SharedModule { }
