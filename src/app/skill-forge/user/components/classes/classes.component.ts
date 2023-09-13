import {Component, OnInit} from '@angular/core';
import {Link} from "../../../../shared/model/Link";

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.scss']
})
export class ClassesComponent implements OnInit{

    coursesLink! : Link[];

    // constructor(private _s : ) {
    // }

    ngOnInit(): void {
        this.coursesLink = [
            // { name : "", url : "*", goto : () => this._authService.logout()}
            { name : 'arrow', url : "*", icon: 'switch_right ',
                // goto : () => this.coursesService.getNext()
            }
        ]

    }



}
