import { Component, OnInit, SimpleChange } from '@angular/core';
import { Router } from '@angular/router';
import { ChatService } from '../chat.service';
import { SignupModel } from '../register/Signupmodel';
import { ChatroomService } from '../chatroom.service';
import { Observable } from 'rxjs';
import { interval } from 'rxjs';
import {flatMap, mergeMap} from 'rxjs/operators';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  users! : SignupModel[];
  
  constructor(private chatService:ChatroomService, private router:Router, private chatrService:ChatService) { }
   useremail=sessionStorage.getItem('email');
   showchathistory:boolean=false;
   showOnline:boolean=false;
   username:String;
  useremails:String;
userstatus:String;
userlist:any
useronline=[];
usercount:any;
muteuser=[];
blockedusers=[]
socketId: string = '';
   messageArray:Array<{lname:String, email:String, online:String}> = [];
   messagevalue:any;
  
  ngOnInit(): void {
    setInterval(() => { this.chatService.getUsers()
    .subscribe((data)=>{
    this.userlist= (JSON.parse(JSON.stringify(data)));
    this.messageArray.push(this.userlist)
  })},3000)
    
      
   
  }
 
getChatroom(){
  this.router.navigate(['/chatroom']);
}
getChathistory(){
 this.showchathistory=!this.showchathistory;
}
getChatroom1(){
  this.router.navigate(['/chathistory']);
}
getChatroom2(){
  this.router.navigate(['/chathistorys']);
}
getChatroom3(){
  this.router.navigate(['/chathistoryrs']);
}
getBlock(user){
  this.blockedusers.push(user._id.toString())
  sessionStorage.removeItem("privateuser")
  console.log(this.blockedusers)
  }
  getUnblock(user){
    this.blockedusers.splice(user._id.toString(),1)
    sessionStorage.setItem("privateuser",user._id.toString())
    }
    getMute(user){
      this.muteuser.push(user._id.toString())
      if(!(this.muteuser.includes(this.useremail))){
        this.muteuser.push(this.useremail)
        }
      console.log(this.muteuser)
      }
      getUnmute(user){
        let privateuser=sessionStorage.getItem("privateuser")
        const index = this.muteuser.indexOf(user._id.toString());
if (index > -1) {
  this.muteuser.splice(index, 1);
  console.log(this.muteuser)
}
       
        }
    playAudio(){
      let audio = new Audio();
      audio.src = "../../../assets/audio/alarm.mp3";
      audio.load();
      audio.play();
    }
    getUsername(user){
      sessionStorage.setItem("indvuserId", user._id.toString())
      sessionStorage.setItem("recevmail", user.email.toString())
      this.router.navigate(['privatechat']);

      }
}
