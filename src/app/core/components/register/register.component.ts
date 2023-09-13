import { Component } from '@angular/core';
import {FormGroup} from "@angular/forms";
import {FormlyFieldConfig} from "@ngx-formly/core";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
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


  onSubmit() {
    console.log(this.form.value);
  }
}
