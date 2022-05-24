import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContatoComponent } from './contato/contato.component';
import { HomeComponent } from './home/home.component';
import { LivrosComponent } from './livros/livros.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';


const routes: Routes = [
  {path: 'livros', loadChildren:()=> import('./livros/livro.module').then(mod => mod.LivroModule)},
  {path: 'userInfo', loadChildren:()=> import('./user-info/user.module').then(mod => mod.UserModule)},
  {path: 'sobre', component: SobreNosComponent},
  {path: 'contato', component: ContatoComponent},
  {path: '', component: LivrosComponent},
  {path: '**', component: PaginaNaoEncontradaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
