import {Component} from '@angular/core';
import {Form, FormGroup} from "@angular/forms";
import {FormlyFieldConfig} from "@ngx-formly/core";
import {AuthService} from "../../../shared/services/auth.service";
import {AuthDTO} from "../../../shared/model/User";
import {Router} from "@angular/router";
import {DynamicDialogRef} from "primeng/dynamicdialog";
import {MessageService} from "primeng/api";
import {timeout} from "rxjs";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent {

    errorMessage: string = '';

    constructor(private _authService: AuthService,
                private _router: Router,
                private _dialogRef: DynamicDialogRef,
                private _msgService: MessageService) {
    }

    form = new FormGroup({});
    model = {
        username: '',
        password: '',
    };
    fields: FormlyFieldConfig[] = [
        {
            key: 'username',
            type: 'input',
            templateOptions: {
                // type : 'text',
                placeholder: 'Nom d\'utilisateur ou email',
                required: true,
            }
        },
        {
            key: 'password',
            type: 'input',
            props: {
                type: 'password',
                placeholder: 'Mot de passe',
                required: true,
            }
        },
    ]

    onSubmit() {
        this._authService.login(this.model).subscribe({
            next: (response: AuthDTO) => {
                this._dialogRef.close()
                this._router.navigateByUrl('/home');
                new Promise(() => this._msgService.add({severity: 'success', detail: 'Connexion réussie'})).then(() => setTimeout(() => this._msgService.clear(), 5))
            }, error: (err) => {
                this.form.markAllAsTouched();
                this.errorMessage = 'Échec de l\'authentification. Vérifiez vos informations.'
            }
        })
    }
}
