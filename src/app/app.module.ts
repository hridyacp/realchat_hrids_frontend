import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalModule } from 'ngx-bootstrap/modal'; 
import { RegisterComponent } from './register/register.component';
import { ConfirmEqualValidatorDirective } from './register/confirm-equal-validator.directive';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { ProfileComponent } from './profile/profile.component';
import { ChatComponent } from './chat/chat.component';
import { ChatroomComponent } from './chatroom/chatroom.component';
import { ChatService } from './chat.service';
import { ChatroomService } from './chatroom.service';
import { ChathistoryComponent } from './chathistory/chathistory.component';
import { Chathistory1Component } from './chathistory1/chathistory1.component';
import { Chathistory2Component } from './chathistory2/chathistory2.component';
import { PrivatechatComponent } from './privatechat/privatechat.component';
import { PopupchatComponent } from './popupchat/popupchat.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    ConfirmEqualValidatorDirective,
    ProfileComponent,
    ChatComponent,
    ChatroomComponent,
    ChathistoryComponent,
    Chathistory1Component,
    Chathistory2Component,
    PrivatechatComponent,
    PopupchatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  FormsModule,
  HttpClientModule,
  NgbModule,
  ModalModule.forRoot()
  ],
  providers: [ChatService,ChatroomService],
  bootstrap: [AppComponent]
})
export class AppModule { }
