import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/internal/Observable";
import { map } from "rxjs/operators";

import { UserInterface } from "../models/user-interface";


@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  constructor(private htttp: HttpClient) {}
  headers: HttpHeaders = new HttpHeaders({
    "Content-Type": "application/json"
  });

  loginuser(email: string, password: string): Observable<any> {
    const url_api = "http://34.72.4.108:5000/login";
    return this.htttp
      .post<UserInterface>(
        url_api,
        { email, password },
        { headers: this.headers }
      )
      .pipe(map(data => data));
  }

  setUser(user: UserInterface): void {
    let user_string = JSON.stringify(user);
    localStorage.setItem("currentUser", user_string);
  }

  setToken(token : any): void {
    localStorage.setItem("accessToken", token);
  }

  logoutUser() {
    //let accessToken = localStorage.getItem("accessToken");
    
    localStorage.removeItem("accessToken");
    localStorage.removeItem("currentUser");
    //return this.htttp.post<UserInterface>(url_api, { headers: this.headers });
  }

}
