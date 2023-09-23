import {Component} from '@angular/core';
import {ClassDTO} from "../../../../models/ClassDTO";
import {DynamicDialogConfig} from "primeng/dynamicdialog";

@Component({
  selector: 'app-detail-class',
  templateUrl: './detail-class.component.html',
  styleUrls: ['./detail-class.component.scss']
})
export class DetailClassComponent {

  clazz!: ClassDTO;

  constructor(public config : DynamicDialogConfig) {
    this.clazz = this.config.data.clazz
  }

}
