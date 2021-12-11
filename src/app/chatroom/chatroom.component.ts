import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ChatService } from '../chat.service';
import io from 'socket.io-client';
import { ChatroomService } from '../chatroom.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chatroom',
  templateUrl: './chatroom.component.html',
  styleUrls: ['./chatroom.component.css']
})
export class ChatroomComponent implements OnInit {
  user:String;
  room:String;
  messageText:String;
  history:any;
  messageArray:Array<{user:String,message:String}> = [];
  chatroom1:boolean=false;
  chatroom2:boolean=false;
  chatroom3:boolean=false;
  constructor(private chatService:ChatroomService, private chatrService:ChatService, private router:Router) { }
  
  ngOnInit(): void {
    this.chatService.newUserJoined()
        .subscribe(data=> this.messageArray.push(data));


        this.chatService.userLeftRoom()
        .subscribe(data=>this.messageArray.push(data));

        this.chatService.newMessageReceived()
        .subscribe(data=>this.messageArray.push(data));     
  }
 
  join(){
    this.chatService.joinRoom({user:this.user, room:this.room});
    if(this.room=='Chat Room1')
    this.chatrService.getHistory1()
    .subscribe((data)=>{
      this.history=JSON.parse(JSON.stringify(data));
      console.log(this.history);
    })
    else if(this.room=='Chat Room2')
    this.chatrService.getHistory2()
    .subscribe((data)=>{
      this.history=JSON.parse(JSON.stringify(data));
      console.log(this.history);
    })
    else if(this.room=='Chat Room3')
    this.chatrService.getHistory3()
    .subscribe((data)=>{
      this.history=JSON.parse(JSON.stringify(data));
      console.log(this.history);
    })
}

leave(){
    this.chatService.leaveRoom({user:this.user, room:this.room});
    this.router.navigate(['/chat']);
}

sendMessage()
{
    this.chatService.sendMessage({user:this.user, room:this.room, message:this.messageText});
    this.messageText='';
}

}
