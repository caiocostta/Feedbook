import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserEditComponent } from './user-edit/user-edit.component';
import { UserFeedbacksComponent } from './user-feedbacks/user-feedbacks.component';
import { UserInfoComponent } from './user-info.component';
import { LoginComponent } from './login/login.component'
import { CadastroComponent } from './cadastro/cadastro.component'


const usersRoutes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'cadastro', component: CadastroComponent},
    {path: ':nomeUsuario', component: UserInfoComponent, children: [
        {path: '/edit', component: UserEditComponent},
        {path: '/feedbacks', component: UserFeedbacksComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(usersRoutes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
