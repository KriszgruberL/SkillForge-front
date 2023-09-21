import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AppComponent} from "../app.component";
import {PrimengModule} from "./primeng.module";
import {FormlyModule} from "@ngx-formly/core";
import {CustomFieldType} from "./model/custom-field.type";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {WorkInProgressComponent} from "./components/work-in-progress/work-in-progress.component";
import {FullCalendarModule} from "@fullcalendar/angular";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";


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
        FullCalendarModule,
        BrowserAnimationsModule,

    ], exports: [
        CommonModule,
        FormlyModule,
        PrimengModule,
        ReactiveFormsModule,
        FullCalendarModule,
    ], bootstrap : [
        AppComponent
    ]
})
export class SharedModule {
}
