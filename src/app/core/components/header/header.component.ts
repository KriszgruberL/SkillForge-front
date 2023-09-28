import {Component, OnDestroy, OnInit} from '@angular/core';
import {Link} from "../../../shared/model/Link";
import {MenuItem, MenuItemCommandEvent, MessageService} from "primeng/api";
import {DialogService, DynamicDialogRef} from "primeng/dynamicdialog";
import {RegisterComponent} from "../register/register.component";
import {LoginComponent} from "../login/login.component";
import {Form} from "@angular/forms";
import {UserDTO} from "../../../shared/model/User";
import {AuthService} from "../../../shared/services/auth.service";
import {Subscription} from "rxjs";

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
  isLogged: boolean = false;
  private subscription$$: Subscription;

  constructor(public dialogService: DialogService,
              private _msgService: MessageService,
              private _authService : AuthService) {
    this.subscription$$ = this._authService.connectedUser$.subscribe((user) => {
      this.isLogged = user !== undefined;
      console.log(("logged : " + this.isLogged))
    });
  }

  ngOnInit(): void {

    this.links = [
      {name: "Accueil", url: "/home"},
      {name: "Agenda", url: "/agenda"},
      {name: "Cours", url: "/class"},
    ]

    this.visitorLink = [
      {name: "S'enregistrer", url: "*", icon : "person_check", goto : () => this.showRegister(), visible : !this.isLogged},
      {name: "Se connecter", url: "*", icon : "login", goto : () => this.showLogin(), visible : !this.isLogged},
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
    this.subscription$$.unsubscribe();
  }

  update() {
    this._msgService.add({severity: 'success', summary: 'Success', detail: 'Data Updated'});
  }

  delete() {
    this._msgService.add({severity: 'warn', summary: 'Delete', detail: 'Data Deleted'});
  }

  showRegister() {
    this.ref = this.dialogService.open(RegisterComponent, {
      header: 'S\'enregistrer',
      width : '30%',
      closeOnEscape : true,
    });
  }

  showLogin() {
    this.ref = this.dialogService.open(LoginComponent, {
      header: 'Se connecter',
      width : '30%',
      closeOnEscape : true,
    });
  }


  logout(): void {
    this._authService.logout();
  }




}



