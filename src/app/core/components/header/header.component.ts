import {Component, OnDestroy, OnInit} from '@angular/core';
import {Link} from "../../../shared/model/Link";
import {MenuItem, MenuItemCommandEvent, MessageService} from "primeng/api";
import {DialogService, DynamicDialogRef} from "primeng/dynamicdialog";
import {RegisterComponent} from "../register/register.component";
import {LoginComponent} from "../login/login.component";
import {Form} from "@angular/forms";
import {UserDTO} from "../../../shared/model/User";
import {AuthService} from "../../../shared/services/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  ref: DynamicDialogRef | undefined;
  links!: Link[];
  userLink!: MenuItem[] | undefined;
  visitorLink!: Link[];

  user! : UserDTO;

  constructor(public dialogService: DialogService,
              private messageService: MessageService,
              private _authService : AuthService) {
  }

  ngOnInit(): void {

    this.links = [
      {name: "Accueil", url: "/home"},
      {name: "Agenda", url: "*"},
      {name: "Cours", url: "/courses"},
    ]

    this.visitorLink = [
      {name: "S'enregistrer", url: "*", icon : "person_check", goto : () => this.showRegister()},
      {name: "Se connecter", url: "*", icon : "login", goto : () => this.showLogin()},
      {name: "Se déconnecter", url: "*", icon : "logout", goto : () => this._authService.logout()},
    ]

    this.userLink = [
      {
        label: 'Profil',
        icon: 'pi pi-fw pi-user',
      },
      {
        separator: true,
      },
      {
        label: 'Se déconnecter',
        icon: 'pi pi-fw pi-power-off',
        command: () => {
          this.logout();
        }
      }
    ];
  }

  ngOnDestroy(): void {
  }


  update() {
    this.messageService.add({severity: 'success', summary: 'Success', detail: 'Data Updated'});
  }

  delete() {
    this.messageService.add({severity: 'warn', summary: 'Delete', detail: 'Data Deleted'});
  }

  showRegister() {
    this.ref = this.dialogService.open(RegisterComponent, {
      header: 'S\'enregistrer',
      width : '30%',
      closeOnEscape : true,
    });
    this.ref.onClose.subscribe((user : UserDTO) => {
      if (user) {
        this.messageService.add({ severity: 'info', summary: 'Product Selected', detail: user.username })
        // this._authService.login()
      }
    });
  }

  showLogin() {
    this.ref = this.dialogService.open(LoginComponent, {
      header: 'Se connecter',
      width : '30%',
      closeOnEscape : true,
    });
    this.ref.onClose.subscribe(() => {
    // todo
    });
  }


  logout(): void {
    console.log("logout pouet")
  }


}



