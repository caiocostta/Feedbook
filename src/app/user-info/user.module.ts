import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserInfoComponent } from './user-info.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserFeedbacksComponent } from './user-feedbacks/user-feedbacks.component';
import { UserRoutingModule } from './user.routing.module';
import { LoginComponent } from './login/login.component'
import { CadastroComponent } from './cadastro/cadastro.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    UserInfoComponent,
    UserEditComponent,
    UserFeedbacksComponent,
    LoginComponent,
    CadastroComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class UserModule { }
