import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { UserModel } from '../models/user.model';
import { LoginRequest, LoginResponse, RegisterRequest, RegisterResponse } from '../models/auth.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
 private based_url ='http://localhost:5000/auth'
  constructor(private http:HttpClient){

  }
  register(user:RegisterRequest):Observable<any>{
    return this.http.post<RegisterResponse>(`${this.based_url}/register`,user)
  }
  login(user: LoginRequest): Observable<any> {
    return this.http.post<LoginResponse>(`${this.based_url}/login`, user).pipe(
    tap((res) => {
      localStorage.setItem('token', res.token);
       localStorage.setItem('role', res.data.role);
    }))
  }
  logOut():void{
    localStorage.removeItem('token')
    localStorage.removeItem('role');
  }
  getToken(): string | null {
    return localStorage.getItem('token');
  }
  isLoggedIn():boolean{
    return !!this.getToken()
  }

}
