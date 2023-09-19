import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AppComponent} from "../app.component";
import {MessageService} from "primeng/api";
import {MenuModule} from "primeng/menu";
import {DialogService} from "primeng/dynamicdialog";
import {ToastModule} from "primeng/toast";
import {ContextMenuModule} from "primeng/contextmenu";
import {ButtonModule} from "primeng/button";
import {DropdownModule} from "primeng/dropdown";
import {CardModule} from "primeng/card";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MessageModule} from "primeng/message";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MenuModule,
    ToastModule,
    ContextMenuModule,
    ButtonModule,
    DropdownModule,
    CardModule,
    BrowserAnimationsModule,
    MessageModule,
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
