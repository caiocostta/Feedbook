import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LivroDetalheComponent } from './livro-detalhe/livro-detalhe.component';
import { LivroNaoEncontradoComponent } from './livro-nao-encontrado/livro-nao-encontrado.component';
import { LivrosComponent } from './livros.component';




const livrosRoutes: Routes = [
  {path: '', component: LivrosComponent},
  {path: 'naoEncontrado', component: LivroNaoEncontradoComponent },
  {path: ':id', component: LivroDetalheComponent}
];

@NgModule({
  imports: [RouterModule.forChild(livrosRoutes)],
  exports: [RouterModule]
})
export class LivrosRoutingModule { }
