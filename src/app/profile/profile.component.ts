import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';
import { SignupModel } from '../register/Signupmodel';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user! : SignupModel[];
  constructor(private chatService:ChatService) { }

  ngOnInit(): void {
  
  }

}
