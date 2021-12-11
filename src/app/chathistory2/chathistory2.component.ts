import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-chathistory2',
  templateUrl: './chathistory2.component.html',
  styleUrls: ['./chathistory2.component.css']
})
export class Chathistory2Component implements OnInit {
historyrs
  constructor(private chatService:ChatService) { }

  ngOnInit(): void {
    this.chatService.getHistory3()
    .subscribe((data)=>{
      this.historyrs=JSON.parse(JSON.stringify(data));
      console.log(this.historyrs);
    })
  }

}
