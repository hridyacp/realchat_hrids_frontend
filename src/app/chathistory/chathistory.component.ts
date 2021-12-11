import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-chathistory',
  templateUrl: './chathistory.component.html',
  styleUrls: ['./chathistory.component.css']
})
export class ChathistoryComponent implements OnInit {

  constructor(private chatService:ChatService) { }
history
  ngOnInit(): void {
    this.chatService.getHistory1()
    .subscribe((data)=>{
      this.history=JSON.parse(JSON.stringify(data));
      console.log(this.history);
    })
  }
  
  
}
