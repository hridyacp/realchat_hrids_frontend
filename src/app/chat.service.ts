import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import io from 'socket.io-client';
@Injectable({
  providedIn: 'root'
})
export class ChatService {
  server_address:String = 'http://localhost:5200';
  constructor(private http:HttpClient) { }
  private socket = io('http://localhost:5200',{ transports: ['websocket','polling', 'flashback']})
  signup(item:any){
    return this.http.post(`${this.server_address}/signupnew`,{'signup':item})
    }
    getProfile(id:any){
      return this.http.get(`${this.server_address}/profile/`+id)
    }
    getHistory1(){
      return this.http.get(`${this.server_address}/history`)
    }
    getHistory2(){
      return this.http.get(`${this.server_address}/historys`)
    }
    getHistory3(){
      return this.http.get(`${this.server_address}/historyrs`)
    }
    logout(item){   
        return this.http.post(`${this.server_address}/logouts`,{'item':item})
        .subscribe(data=>{console.log(data)})   
    }
    numUsers(){
      return this.http.get(`${this.server_address}/numberusers`)
    }
    getHistoryprivate(rec){
      return this.http.get(`${this.server_address}/historyprivate/`+rec)
    }
    getindvuser(id:any){
      // return this.http.get("/api/"+id);
       return this.http.get(`${this.server_address}/indvuser/`+id);
  } 
  blockContact(item:any){
    console.log(item)
    return this.http.post<any>(`${this.server_address}/blockcontact`,item)
    .subscribe((data)=>{
        
        console.log(data)
        localStorage.setItem
      })    
}
unblockContact(item:any){
    console.log(item)
    return this.http.post<any>(`${this.server_address}/unblockContact`,item)
    .subscribe((data)=>{
        
        console.log(data)
      }) 
}
contactsblocked(item:any){
    return this.http.get<any>(`${this.server_address}/contactsblocked/`+item);   
}
chatHistory(item:any){
  console.log(item)
  return this.http.get<any>(`${this.server_address}/chatHistory/`+item);
}
}
