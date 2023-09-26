import {Component, OnInit} from '@angular/core';
import {ClassDTO, ListSmallDTO, SmallClassDTO} from "../../../models/ClassDTO";
import {ClassService} from "../../../services/class.service";
import {PaginatorState} from "primeng/paginator";
import {DialogService, DynamicDialogRef} from "primeng/dynamicdialog";
import {DetailClassComponent} from "./detail-class/detail-class.component";
import {AddClassComponent} from "./add-class/add-class.component";
import {AuthService} from "../../../../shared/services/auth.service";

interface PageEvent {
  first: number;
  rows: number;
  page: number;
  pageCount: number;
}

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.scss']
})
export class ClassComponent implements OnInit {

  // onlineClasses!: OnlineCourseDTO[];
  classes!: ListSmallDTO;
  ref: DynamicDialogRef | undefined;
  class!: ClassDTO;

  responsiveOptions: any[] | undefined;
  currentPage = 0;
  pageSize = 3;

  constructor(private _classService: ClassService,
              public dialogService: DialogService) {
  }

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this._classService.getClassByUser(this.currentPage, this.pageSize).subscribe({
        next: data => {
          this.classes = data;
        }, error: err => console.error('Error fetching data : ', err)
      }
    )
  }

  onPageChange($event: any) {
    this.currentPage = $event.first;
    this.fetchData()
  }

  getPourcent(status: number) {
    if (status === 100 || status > 75) {
      return '100'
    } else if (status > 0 && status <= 25) {
      return '25'
    } else if (status > 25 && status <= 50) {
      return '50'
    } else if (status > 50 && status <= 75) {
      return '75'
    } else if (status === 0 || status < 25) {
      return '0'
    } else {
      return 'error'
    }
  }

  getStatus(status: string) {
    switch (status) {
      case 'NOT_STARTED' :
        return 'Pas commencé'
      case 'IN_PROGRESS' :
        return 'En cours'
      case 'FINISHED' :
        return 'Terminé'
      default :
        return 'ERROR'
    }
  }


  calculateAdvancement(end: Date, start: Date): number {
    const endDate = new Date(end).getTime()
    const startDate = new Date(start).getTime()
    const currentDate = Date.now()

    if (currentDate < startDate) {
      // Class not started
      return 0;
    } else if (currentDate >= endDate) {
      // Class is finished
      return 100;
    } else {
      // Calculate the percentage
      const percentage = ((currentDate - startDate) / (endDate - startDate) * 100)
      return Math.round(percentage)
    }
  }


  showDetail(id: number, name: string) {
    this._classService.getOne(id).subscribe({
      next: (data) => {
        this.ref = this.dialogService.open(DetailClassComponent, {
          data: {clazz: data},
          header: name.toUpperCase(),
          width: '80%',
          closeOnEscape: true,
        });
      },
      error: error => console.error('Error fetching data with id', id, 'error : ', error)
    })

  }

  // showAdd() {
  //       this.ref = this.dialogService.open(AddClassComponent, {
  //         header : 'Ajouter un cours',
  //         width: '90%',
  //         closeOnEscape: true,
  //       });
  //     }
}
