import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ClassDTO} from "../models/ClassDTO";
import {InstitutionDTO} from "../models/InstitutionDTO";

@Injectable({
  providedIn: 'root'
})
export class InstitutionService {
  private _urlAPI = 'http://localhost:8080/institution'

  constructor(private _http : HttpClient,) { }

  getInstitution(): Observable<InstitutionDTO[]>{
    return this._http.get<InstitutionDTO[]>(`${this._urlAPI}`)
  }
}
