import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AppComponent} from "../app.component";
import {PrimengModule} from "./primeng.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PrimengModule,
    BrowserAnimationsModule,
  ],
  providers: [

  ],
  bootstrap: [
    AppComponent
  ]
})
export class SharedModule { }
