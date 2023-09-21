import { Component } from '@angular/core';
import {FormGroup} from "@angular/forms";
import {FormlyFieldConfig} from "@ngx-formly/core";
import {AuthDTO} from "../../../shared/model/User";
import {AuthService} from "../../../shared/services/auth.service";
import {MessageService} from "primeng/api";
import {Router} from "@angular/router";
import {DynamicDialogRef} from "primeng/dynamicdialog";
import {LoginComponent} from "../login/login.component";
import {HeaderComponent} from "../header/header.component";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  errorMessage : string = "";
  constructor(private _authService: AuthService,
              private _router: Router,
              private _dialogRef: DynamicDialogRef,
              private _msgService: MessageService,
              private _headerComponent : HeaderComponent) {
  }

  form = new FormGroup({});
  model = {
    username : '',
    email : '',
    password : '',
    confirmpassword : ''
  };
  fields : FormlyFieldConfig[] = [
    {
      key : 'username',
      type : 'input',
      props : {
        // type : 'text',
        placeholder : 'Nom d\'utilisateur',
        required : true,
      }
    },
    {
      key : 'email',
      type : 'input',
      props : {
        type : 'email',
        placeholder : 'Email',
        required : true,
      }
    },
    {
      key : 'password',
      type : 'input',
      props : {
        type : 'password',
        placeholder : 'Mot de passe',
        required: true,
      }
    },
    {
      key : 'confirmpassword',
      type : 'input',
      props : {
        type : 'password',
        placeholder : 'Confirmer le mot de passe',
        required: true,
      }
    },
  ]
  showLogin(){
    this._dialogRef.close();
    this._headerComponent.showLogin();
  }
  onSubmit() {
    this._authService.register(this.model).subscribe(
      {
        next : (response : AuthDTO) => {
          this._dialogRef.close()
          this._router.navigateByUrl('/home')
          new Promise(() => this._msgService.add({
            severity: 'success',
            detail: 'Enregistrement réussi'
          })).then(() => setTimeout(() => this._msgService.clear(), 5))
        }, error :(err) => {
          this.form.markAllAsTouched()
          this.errorMessage = 'Échec de l\'enregistrement. Vérifiez vos informations.'
          //todo don't be fucking lazy do proper validation
        }
      }
    )
  }
}
