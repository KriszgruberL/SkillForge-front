import {Component, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {FormlyFieldConfig, FormlyFormOptions} from "@ngx-formly/core";
import {ClassService} from "../../../../services/class.service";
import {InstitutionService} from "../../../../services/institution.service";
import {map, tap} from "rxjs";
import {InstitutionDTO} from "../../../../models/InstitutionDTO";

@Component({
  selector: 'app-add-class',
  templateUrl: './add-class.component.html',
  styleUrls: ['./add-class.component.scss']
})
export class AddClassComponent implements OnInit{

  errorMessage: string = '';
  institutions: { label: string; value: string }[] = [];

  constructor(private _classService: ClassService,
              private _institutionService : InstitutionService,
              // private _router: Router,
              // private _dialogRef: DynamicDialogRef,
              // private _msgService: MessageService,
  ) {}

  ngOnInit(): void {

  }

  form = new FormGroup({});
  options: FormlyFormOptions = {};
  model = {
    name: '',
    ueCode: '',
    result: '',
    status: '',
    startDate: '',
    endDate: '',
    teacher: '',
    program: '',
    terminalCapacities: '',
    sessions: '',
    institution: '',
  };
  fields: FormlyFieldConfig[] = [
    {
      fieldGroupClassName: 'flex-',
      fieldGroup: [
        {
          key: 'name',
          type: 'input',
          className: 'flex-2',
          props: {
            placeholder: 'Nom du cours',
            required: true,
          }
        },
        {
          key: 'ueCode',
          type: 'input',
          className: 'flex-1',
          props: {
            placeholder: 'UE code',
          }
        },
      ],
    }, {
      key: 'teacher',
      type: 'input',
      className: 'prof',
      props: {
        placeholder: 'Professeur'
      }
    }, {
      fieldGroupClassName: 'between',
      fieldGroup: [
        {
          key: 'status',
          type: 'select',
          className: 'flex-6',
          props: {
            placeholder: 'Statut',
            required: true,
            options: this._classService.getStatusOptions(),
          }
        }, {
          key: 'result',
          type: 'select',
          className: 'flex-6',
          props: {
            placeholder: 'Résultat',
            options: this._classService.getResultOptions()
          }
        },
      ]
    }, {
      fieldGroupClassName: 'flex-',
      fieldGroup: [
        {
          key: 'startDate',
          type: 'datepicker',
          className: 'flex-3',
          props:
            {
              placeholder: 'Début du cours',
              required: true,
              description: 'Description',
              dateFormat: 'dd-mm-yy',
              numberOfMonths: 1,
              selectionMode: 'single',
              readonlyInput: false,
              showTime: false,
              showButtonBar: true,
              showIcon: false,
              showOtherMonths: true,
              selectOtherMonths: true,
              monthNavigator: true,
              yearNavigator: true,
              yearRange: '2020:2030',
              inline: false,
            }
        }, {
          key: 'endDate',
          type: 'datepicker',
          className: 'flex-3',
          props:
            {
              placeholder: 'Fin du cours',
              required: true,
              description: 'Description',
              dateFormat: 'dd-mm-yy',
              numberOfMonths: 1,
              selectionMode: 'single',
              readonlyInput: false,
              showTime: false,
              showButtonBar: true,
              showIcon: false,
              showOtherMonths: true,
              selectOtherMonths: true,
              monthNavigator: true,
              yearNavigator: true,
              yearRange: '2020:2030',
              inline: false,
            }
        },]
    }, {
      key: 'program',
      type: 'textarea',
      className: 'mb-3',
      props: {
        placeholder: 'Programme'
      }
    }, {
      key: 'terminalCapacities',
      type: 'textarea',
      className: 'mb-3',
      props: {
        placeholder: 'Capacités terminales'
      }
    }, {
      fieldGroupClassName: 'flex-',
      fieldGroup: [
        {
          key: 'sessions',
          type: 'input',
          className: 'flex-4',
          props: {
            placeholder: 'Sessions',
            required : true,
          }
        }, {
          key: 'institution',
          type: 'select',
          className: 'flex-2',
          props: {
            placeholder: 'Etablissement',
            options : this._institutionService.getInstitutionOptions()
          }
        },
      ]
    }
  ]

  onSubmit() {
    console.log(this.fields)
    // this._authService.login(this.model).subscribe({
    //   next: (response: AuthDTO) => {
    //     this._dialogRef.close()
    //     this._router.navigateByUrl('/home');
    //     new Promise(() => this._msgService.add({
    //       severity: 'success',
    //       detail: 'Connexion réussie'
    //     })).then(() => setTimeout(() => this._msgService.clear(), 5))
    //   }, error: (err) => {
    //     this.form.markAllAsTouched();
    //     this.errorMessage = 'Échec de l\'authentification. Vérifiez vos informations.'
    //   }
    // })
  }



}
