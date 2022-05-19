import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './index/cadastro/cadastro.component';
import { CatalogoComponent } from './index/catalogo/catalogo.component';
import { ContatosComponent } from './index/contatos/contatos.component';
import { IndexComponent } from './index/index.component';
import { LivroInfoComponent } from './index/livro-info/livro-info.component';
import { LoginComponent } from './index/login/login.component';
import { SobreNosComponent } from './index/sobre-nos/sobre-nos.component';

const routes: Routes = [
  {path: '', component: IndexComponent, children: [
    {path: '', component: CatalogoComponent},
    {path: 'home', component: CatalogoComponent},
    {path: 'livro/:id', component: LivroInfoComponent},
    {path: 'home/livro/:id', component: LivroInfoComponent},
    {path: 'sobre', component: SobreNosComponent},
    {path: 'contato', component: ContatosComponent},
    {path: 'login', component: LoginComponent},
    {path: 'cadastro', component: CadastroComponent},
  ]},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
