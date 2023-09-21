import {Component, OnInit} from '@angular/core';
import {Link} from "../../../../shared/model/Link";
import {ClassDTO} from "../../../models/ClassDTO";
import {ClassService} from "../../../services/class.service";
import {InstitutionService} from "../../../services/institution.service";
import {InstitutionDTO} from "../../../models/InstitutionDTO";

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.scss']
})
export class ClassComponent implements OnInit {

  coursesLink!: Link[];
  // classes!: ClassDTO[];
  institutions!: InstitutionDTO[];

  responsiveOptions: any[] | undefined;

  constructor(private _classService: ClassService,
              private _institutionService : InstitutionService) {
  }

  ngOnInit(): void {
    this.coursesLink = [
      {
        name: 'Précédent', url: "*", icon: 'arrow_back_ios ',
        // goto : () => this.coursesService.getNext()
      },
      {
        name: 'Suivant', url: "*", icon: 'arrow_forward_ios ',
        // goto : () => this.coursesService.getNext()
      }
    ]

    // this._classService.getClass().subscribe({
    //       next : data => {
    //         this.classes = data;
    //       }, error : err => console.error('Error fetching data : ', err)
    //     }
    // )
    this._institutionService.getInstitution().subscribe({
          next : data => {
            this.institutions = data;
          }, error : err => console.error('Error fetching data : ', err)
        }
    )

    this.responsiveOptions = [
      {
        breakpoint: '1199px',
        numVisible: 1,
        numScroll: 1
      },
      {
        breakpoint: '991px',
        numVisible: 2,
        numScroll: 1
      },
      {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }

  getPourcent(status: number) {
    if(status === 100 || status > 75){
      return 'COMPLETED'
    } else if (status > 0 && status <= 25){
      return 'TWENTY_FIVE'
    }else if (status > 25 && status <= 50){
      return 'FIFTY'
    }else if (status > 50 && status <= 75){
      return 'SEVENTY_FIVE'
    } else if ( status === 0 || status < 25) {
      return 'NOT STARTED'
    } else {
      return 'ERROR'
    }
  }
}
