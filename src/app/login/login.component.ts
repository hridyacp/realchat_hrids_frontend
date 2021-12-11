import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title:string ="Login"
  error:any
  showPassword :boolean =false;
loginForm:any;
numberusers:any;
user={email:'',password:''};
  constructor(private fb:FormBuilder, private loginobj:AuthService, private router:Router, private chatService:ChatService) { }
  ngOnInit(): void {
    this.loginForm=this.fb.group(
      {
        email:['',[Validators.required,Validators.email]],
        password:['',[Validators.minLength(8),Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]]
     }
     )
    }
    password_show_hide(){
      this.showPassword = !this.showPassword;  
    }
    login(){
      this.user.email=this.loginForm.get('email').value
      this.user.password=this.loginForm.get('password').value
      this.chatService.numUsers()
      .subscribe((data)=>{
      this.numberusers=JSON.parse(JSON.stringify(data));
     console.log(this.numberusers) 
      })
        this.loginobj.login(this.user)
        .subscribe(
          (res)=>{
            sessionStorage.setItem('token',res.token);
            sessionStorage.setItem('email',this.user.email);
             this.router.navigate(['/']);
             alert('Login sucessfull');
            }
            ,(err)=>{
              this.error="Email and password dont match. If not a user please sign up"
            }
          )
    }
}
