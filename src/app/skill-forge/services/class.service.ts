import {Injectable} from '@angular/core';
import {ClassAdd, ClassDTO, ListSmallDTO, Result, SmallClassDTO} from "../models/ClassDTO";
import {map, Observable, of, tap} from "rxjs";
import {HttpClient, HttpParams} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ClassService {

  private _urlAPI = 'http://localhost:8080/course'

  constructor(private _http: HttpClient,) {
  }

  getClassByUser(page: number = 0, size: number = 3): Observable<ListSmallDTO> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString())

    return this._http.get<ListSmallDTO>(`${this._urlAPI}/byUser`, {params})
  }

  getClass(): Observable<SmallClassDTO[]> {
    return this._http.get<SmallClassDTO[]>(`${this._urlAPI}`)
  }

  getOne(id: number): Observable<ClassDTO> {
    return this._http.get<ClassDTO>(`${this._urlAPI}/${id}`)
  }

  addClass(model: ClassAdd) {
    return this._http.post<ClassDTO>(`${this._urlAPI}`, model)
  }

  getStatusOptions(): Observable<{ label: string; value: string }[]> {
    return of([
      {label: 'Pas commencé', value: 'NOT_STARTED'},
      {label: 'En cours', value: 'IN_PROGRESS'},
      {label: 'Terminé', value: 'FINISHED'},
    ]);
  }

  getResultOptions(): Observable<{ label: string; value: string }[]> {
    return of([
      {label: 'Réussi', value: 'PASSED'},
      {label: 'Repêchage', value: 'SECOND_CHANCE'},
      {label: 'Raté', value: 'FAILED'},]
    )
  }


}
