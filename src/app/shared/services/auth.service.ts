import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {AuthDTO} from "../model/User";
import {BehaviorSubject, Observable, tap} from "rxjs";
import {Form, FormGroup} from "@angular/forms";
import {LoginModel, RegisterModel} from "../model/Auth";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _urlAPI = 'http://localhost:8080/auth'
  private _$auth: BehaviorSubject<AuthDTO | undefined>
  private _$isLogged: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor( private _http : HttpClient,
               private _router : Router) {
    this._$auth= new BehaviorSubject<AuthDTO | undefined>(this.connectedUser);
  }

  login(form : LoginModel) {
    return this._http.post<AuthDTO>(`${this._urlAPI}/login`, form ).pipe(
      tap((response : AuthDTO) => this.connectedUser = response),
    )
  }

  readonly AUTH_KEY = 'userConnected'

  get connectedUser$(){
    return this._$auth.asObservable()
  }

  get connectedUser(): AuthDTO | undefined {
    const authString = localStorage.getItem(this.AUTH_KEY)
    return authString ? JSON.parse(authString) as AuthDTO : undefined
  }

  set connectedUser(value: AuthDTO | undefined) {
    if (value){
      localStorage.setItem(this.AUTH_KEY, JSON.stringify(value))
      localStorage.setItem('role', this.connectedUser?.user.roles || '')
    }
    else{
      localStorage.removeItem(this.AUTH_KEY)
      localStorage.removeItem('role')
    }
    this._$auth.next(this.connectedUser)
  }

  get $isLogged(): Observable<boolean> {
    return this._$isLogged.asObservable();
  }

  set $isLogged(value: boolean) {
    this._$isLogged.next(value);
  }

  get token(){
    return this.connectedUser?.token;
  }

  register(form : RegisterModel){
    return this._http.post<AuthDTO>(`${this._urlAPI}/register`, form ).pipe(
      tap((response : AuthDTO) => this.connectedUser = response),
    )
  }

  logout(): void {
    this.connectedUser = undefined
    localStorage.removeItem('AUTH_KEY')
    // this.$isLogged = false;
  }
}
