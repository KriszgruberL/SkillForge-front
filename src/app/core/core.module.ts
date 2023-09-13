import {CommonModule} from "@angular/common";
import {HeaderComponent} from "./components/header/header.component";
import {NgModule} from "@angular/core";
import {SharedModule} from "../shared/shared.module";
import {MenuModule} from "primeng/menu";
import {ToastModule} from "primeng/toast";
import {RegisterComponent} from './components/register/register.component';
import {LoginComponent} from './components/login/login.component';
import {ReactiveFormsModule} from "@angular/forms";
import {PrimengModule} from "../shared/primeng.module";
import { HomeComponent } from './components/home/home.component';
import {MessageModule} from "primeng/message";

@NgModule({
  declarations: [
    HeaderComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    PrimengModule,
    ReactiveFormsModule,
    MenuModule,
    ToastModule,
    MessageModule,
  ],
  exports: [
    HeaderComponent,

  ], providers : [
  ]
})
export class CoreModule {
}
