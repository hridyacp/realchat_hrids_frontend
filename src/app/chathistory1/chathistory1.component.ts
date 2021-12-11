import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-chathistory1',
  templateUrl: './chathistory1.component.html',
  styleUrls: ['./chathistory1.component.css']
})
export class Chathistory1Component implements OnInit {

  constructor(private chatService:ChatService) { }
historys
  ngOnInit(): void {
    this.chatService.getHistory2()
    .subscribe((data)=>{
      this.historys=JSON.parse(JSON.stringify(data));
      console.log(this.historys);
    })
  }

}
