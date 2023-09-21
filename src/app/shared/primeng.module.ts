import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MessageService} from "primeng/api";
import {MenuModule} from "primeng/menu";
import {DialogService} from "primeng/dynamicdialog";
import {ToastModule} from "primeng/toast";
import {ContextMenuModule} from "primeng/contextmenu";
import {ButtonModule} from "primeng/button";
import {DropdownModule} from "primeng/dropdown";
import {CardModule} from "primeng/card";
import {MessageModule} from "primeng/message";
import {FormlyPrimeNGModule} from "@ngx-formly/primeng";
import {CarouselModule} from "primeng/carousel";
import {TagModule} from "primeng/tag";


@NgModule({
  exports: [
    MenuModule,
    ToastModule,
    ContextMenuModule,
    ButtonModule,
    DropdownModule,
    CardModule,
    MessageModule,
    FormlyPrimeNGModule,
    CarouselModule,
    TagModule,

  ]
  , providers : [
    DialogService,
    MessageService,
  ]
})
export class PrimengModule { }
