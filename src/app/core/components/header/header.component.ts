import {Component, OnDestroy, OnInit} from '@angular/core';
import {Link} from "../../../shared/model/Link";
import {MenuItem, MenuItemCommandEvent, MessageService} from "primeng/api";
import {DialogService, DynamicDialogRef} from "primeng/dynamicdialog";
import {RegisterComponent} from "../register/register.component";
import {LoginComponent} from "../login/login.component";

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

  constructor(public dialogService: DialogService,
              private messageService: MessageService) {
  }

  ngOnInit(): void {

    this.links = [
      {name: "Accueil", url: "*"},
      {name: "Agenda", url: "*"},
      {name: "Cours", url: "*"},
    ]

    this.visitorLink = [
      {name: "S'enregistrer", url: "*", icon : "person_check", goto : () => this.showRegister()},
      {name: "Se connecter", url: "*", icon : "login", goto : () => this.showLogin()},
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
    this.ref = this.dialogService.open(RegisterComponent, { header: 'S\'enregistrer'});
    // this.ref.onClose.subscribe((product: Product) => {
    //   if (product) {
    //     this.messageService.add({ severity: 'info', summary: 'Product Selected', detail: product.name });
    //   }
    // });
  }

  showLogin() {
    this.ref = this.dialogService.open(LoginComponent, { header: 'Se connecter'});
    // this.ref.onClose.subscribe((product: Product) => {
    //   if (product) {
    //     this.messageService.add({ severity: 'info', summary: 'Product Selected', detail: product.name });
    //   }
    // });
  }

  logout(): void {
    console.log("logout pouet")
  }


}



