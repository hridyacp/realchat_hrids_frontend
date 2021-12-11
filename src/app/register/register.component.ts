import { nullSafeIsEquivalent } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChatService } from '../chat.service';
import { SignupModel } from './Signupmodel';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  title:String = "Sign Up";
  showPassword :boolean =false;
  showConfirmPassword :boolean =false;
  signupForm:any;
  error:any
  constructor(private router:Router, private chatService:ChatService) { }
  signupItem = new SignupModel(null,null,null,null,null)
  ngOnInit(): void {
  }
  password_show_hide(){
    this.showPassword = !this.showPassword; 
  }
  password_show_hide1(){
    this.showConfirmPassword = !this.showConfirmPassword;  
  }
  signUp(){
    this.chatService.signup(this.signupItem)
    .subscribe(
      (res)=>{
        alert('Registration sucessfull');
  this.router.navigate(['login']);
      } 
      ,(user)=>{
        this.error="Email already exists";
      })
    }
}
