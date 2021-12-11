import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import io from 'socket.io-client';
import {Observable} from 'rxjs';
import { ChatService } from './chat.service';
import { SignupModel } from './register/Signupmodel';

@Injectable()
export class ChatroomService {
  server_address:String = 'http://localhost:5200';
  constructor(private http:HttpClient, private chatService:ChatService) { }
  private socket = io('http://localhost:5200',{ transports: ['websocket','polling', 'flashback']})
  item:any
  joinRoom(data:any){
    this.socket.emit('join',data);
  }
  newUserJoined()
  {
      let observable = new Observable<{user:String, message:String}>(observer=>{
          this.socket.on('new user joined', (data:any)=>{
              observer.next(data);
          });
         // return () => {this.socket.disconnect();}
      });
      return observable;
  }
  getIdentity() {
    this.socket.emit('whoami');
    let observable = new Observable<{socketID:String, username:String}>(observer=>{
     this.socket.on('socket-id',(data:any)=>{
            observer.next(data);
        });
      //  return () => {this.socket.disconnect();}
    });
    return observable;

  }
    getUsers(): Observable<SignupModel []>{
     return this.http.get<SignupModel []>(`${this.server_address}/user`)
   }
   

  newUserOnline(){
    this.item=sessionStorage.getItem('email');
    this.socket.emit('privatechat',this.item);
   let observable = new Observable<{username:String,useremails:String, userstatus:String}>(observer=>{
    this.socket.on('online', (data:any)=>{
        observer.next(data);
        console.log(data)
   //return () => {this.socket.disconnect();}
});
})
return observable;   
  }
  newUserOffline(){
    let observable = new Observable<{username:String,useremails:String, userstatus:String}>(observer=>{
      this.socket.on('offline', (data:any)=>{
          observer.next(data);
      });
     //return () => {this.socket.disconnect();}
  });
  return observable;
  }
  leaveRoom(data:any){
    this.socket.emit('leave',data);
  }
  userLeftRoom(){
    let observable = new Observable<{user:String, message:String}>(observer=>{
        this.socket.on('left room', (data:any)=>{
            observer.next(data);
        });
       // return () => {this.socket.disconnect();}
    });

    return observable;
}
  sendMessage(data:any){
    this.socket.emit('message',data);
  }
  newMessageReceived(){
    let observable = new Observable<{user:String, message:String}>(observer=>{
        this.socket.on('new message', (data:any)=>{
            observer.next(data);
        });
        //return () => {this.socket.disconnect();}
    });

    return observable;
}

}
