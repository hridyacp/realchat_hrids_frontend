import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import io from 'socket.io-client';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  server_address:String = 'http://localhost:5200';
  constructor(private http:HttpClient) { }
  private socket = io('http://localhost:5200',{ transports: ['websocket','polling', 'flashback']})
  login(user:any){
    return this.http.post<any>(`${this.server_address}/login`,user)
  }
  loggedIn(){
    return !!sessionStorage.getItem('token')
  }
}
