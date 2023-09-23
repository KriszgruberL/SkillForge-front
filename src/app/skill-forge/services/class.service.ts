import { Injectable } from '@angular/core';
import {ClassDTO, SmallClassDTO} from "../models/ClassDTO";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ClassService {

  private _urlAPI = 'http://localhost:8080/course'

  constructor(private _http : HttpClient,) { }

  getClass(): Observable<SmallClassDTO[]>{
    return this._http.get<SmallClassDTO[]>(`${this._urlAPI}`)
  }

  getOne(id: number) : Observable<ClassDTO> {
    return this._http.get<ClassDTO>(`${this._urlAPI}/${id}`)
  }
}
