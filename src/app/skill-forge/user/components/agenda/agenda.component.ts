import {Component, OnInit} from '@angular/core';
import {CalendarOptions} from "@fullcalendar/core";
import dayGridPlugin from '@fullcalendar/daygrid';
import {EventService} from "../../../services/event.service";

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.scss']
})
export class AgendaComponent implements OnInit{

  //todo https://fullcalendar.io/docs/angular

  constructor(private eventService: EventService) { }

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin]
  };

  ngOnInit() {
    // this.eventService.getEvents().then(events => {
    //   this.events = events;
    //   this.options = {...this.options, ...{events: events}};
    // });
  //   this.options = {
  //     initialDate : new Date(),
  //     headerToolbar: {
  //       left: 'prev,next today',
  //       center: 'title',
  //       right: 'dayGridMonth,timeGridWeek,timeGridDay'
  //     },
  //     editable: true,
  //     selectable:true,
  //     selectMirror: true,
  //     dayMaxEvents: true
  //   };
  }

}
