import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { AuthService } from '../auth.service';
import { ChatService } from '../chat.service';
import { SignupModel } from '../register/Signupmodel';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public _auth:AuthService, private router:Router, private chatService:ChatService) { }
  signupItem = new SignupModel(null,null,null,null,null)
  emails:any
  ngOnInit(): void {
  }
  logoutUser(){
    this.signupItem.email=sessionStorage.getItem('email');
    this.emails=sessionStorage.getItem('email');
    this.chatService.logout(this.signupItem);
    localStorage.setItem(this.emails,'no');
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('email');
    
this.router.navigate(['/']);
  }
}
