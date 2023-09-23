import {Component, OnInit} from '@angular/core';
import {Link} from "../../../../shared/model/Link";
import {ClassDTO} from "../../../models/ClassDTO";
import {ClassService} from "../../../services/class.service";
import {InstitutionService} from "../../../services/institution.service";
import {InstitutionDTO} from "../../../models/InstitutionDTO";
import {PaginatorState} from "primeng/paginator";

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
  classes!: ClassDTO[];

  responsiveOptions: any[] | undefined;
  first2: any;
  rows2: any;

  constructor(private _classService: ClassService,) {}


  ngOnInit(): void {


    this._classService.getClass().subscribe({
          next : data => {
            this.classes = data;
          }, error : err => console.error('Error fetching data : ', err)
        }
    )

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

  calculateAvancement(end: Date, start: Date): number {
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
      return Math.round(percentage * 100) / 100
    }
  }


  onPageChange2($event: PaginatorState) {

  }
}
