import * as React from 'react';
import { connect } from 'react-redux';
import LoginModel from '../Model/login.model';
import ApiResponse from '../Model/api.response';
import { Observable } from 'redux';
import RegisterModel from '../Model/register.model';
import { EventEmitter } from 'events';
import { useJwt }  from "react-jwt";

export class AuthService {
    [x: string]: any;
    
    constructor(private http: HttpClient) { }
    
    token_data: any;
    baseUrl = "/api/Account";
    loginStatus = new EventEmitter<boolean>();
    
    register(model: RegisterModel): Observable<ApiResponse> {
      return this.http.post<ApiResponse>(this.baseUrl + "/register", model)
    }
    
    login(model: LoginModel): Observable<ApiResponse> {
      return this.http.post<ApiResponse>(this.baseUrl + "/login", model)
    }
    
    isAdmin(): boolean {
      var currect_token = localStorage.getItem('token');
    
       if(currect_token != null) {
         currect_token =  useJwt(currect_token);
         if(this.token_data.roles == "Admin") {
           return true;
         } else {
           return false;
         }
       } else {
           return false;
       }
      }
        isLoggedIn(): boolean {
          var currect_token = localStorage.getItem('token');
    
         if(currect_token != null) {
           return true;
         } else {
           return false;
         }
       }
       
      
       Logout() {
         this.loginStatus.emit(false);
        localStorage.removeItem('token');
       }
   }
}
export default AuthService;
