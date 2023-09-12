import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AppComponent} from "../app.component";
import {MessageService} from "primeng/api";
import {MenuModule} from "primeng/menu";
import {DialogService} from "primeng/dynamicdialog";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MenuModule,
  ],
  providers: [
    MessageService,
    DialogService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class PrimengModule { }
