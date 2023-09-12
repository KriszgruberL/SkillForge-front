import {CommonModule} from "@angular/common";
import {HeaderComponent} from "./components/header/header.component";
import {NgModule} from "@angular/core";
import {SharedModule} from "../shared/shared.module";
import {MenuModule} from "primeng/menu";
import {ToastModule} from "primeng/toast";
import {ContextMenuModule} from "primeng/contextmenu";
import {ButtonModule} from "primeng/button";
import {DropdownModule} from "primeng/dropdown";
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    HeaderComponent,
    RegisterComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MenuModule,
    ToastModule,
    ContextMenuModule,
    ButtonModule,
    DropdownModule,
  ],
  exports: [
    HeaderComponent,

  ], providers : [
  ]
})
export class CoreModule {
}
