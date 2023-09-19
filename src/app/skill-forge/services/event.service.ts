import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class EventService {

  private _urlAPI = 'http://localhost:8080/agenda'
  constructor(private http: HttpClient) {}

  getEvents() {
    return this.http.get('showcase/resources/data/calendarevents.json')
  }
}
