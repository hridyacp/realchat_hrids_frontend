import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './chat/chat.component';
import { ChathistoryComponent } from './chathistory/chathistory.component';
import { Chathistory1Component } from './chathistory1/chathistory1.component';
import { Chathistory2Component } from './chathistory2/chathistory2.component';
import { ChatroomComponent } from './chatroom/chatroom.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PopupchatComponent } from './popupchat/popupchat.component';
import { PrivatechatComponent } from './privatechat/privatechat.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
{path:'login',component:LoginComponent},
{path:'signup',component:RegisterComponent},
{path:'profile',component:ProfileComponent},
{path:'chat',component:ChatComponent},
{path:'chatroom',component:ChatroomComponent},
{path:'chathistory',component:ChathistoryComponent},
{path:'chathistorys',component:Chathistory1Component},
{path:'chathistoryrs',component:Chathistory2Component},
{path:'privatechat',component:PrivatechatComponent, children:
[{path:'popupchat',component:PopupchatComponent}]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
