import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { LivrosComponent } from './livros.component';
import { LivroDetalheComponent } from './livro-detalhe/livro-detalhe.component';
import { LivroNaoEncontradoComponent } from './livro-nao-encontrado/livro-nao-encontrado.component';
import { LivrosRoutingModule } from './livros.routing.module';


@NgModule({
  declarations: [
    LivrosComponent,
    LivroDetalheComponent,
    LivroNaoEncontradoComponent
  ],
  imports: [
    CommonModule,
    LivrosRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: []
})
export class LivroModule { }
