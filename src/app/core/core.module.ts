import {CommonModule} from "@angular/common";
import {HeaderComponent} from "./components/header/header.component";
import {NgModule} from "@angular/core";
import {SharedModule} from "../shared/shared.module";
import {RegisterComponent} from './components/register/register.component';
import {LoginComponent} from './components/login/login.component';
import {HomeComponent} from './components/home/home.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MessageService} from "primeng/api";

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
    ReactiveFormsModule,
  ],
  exports: [
    HeaderComponent,
  ], providers : [
    HeaderComponent,
  ]
})
export class CoreModule {
}
