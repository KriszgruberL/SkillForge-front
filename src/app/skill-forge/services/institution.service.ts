import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable, of} from "rxjs";
import {SmallClassDTO} from "../models/ClassDTO";
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

  getInstitutionOptions(): Observable<{label: string; value: string}[]>{
    return this.getInstitution().pipe(
      map((data) => {
        const options = data.map((institution) => ({
          label: institution.name,
          value: institution.name,
        }));

      options.push({label : 'Créer un établissement', value : 'create'});
      return options;
      })
    );
  }


}




