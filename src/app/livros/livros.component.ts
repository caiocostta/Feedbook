import { Component, OnInit } from '@angular/core';

import { LivrosService } from './livros.service';


@Component({
  selector: 'app-livros',
  templateUrl: './livros.component.html',
  styleUrls: ['./livros.component.css']
})
export class LivrosComponent implements OnInit {

  livros: any;
  livro: any;
  bookName: any;
  dados: any;

  constructor(private livrosService: LivrosService) {}

  handleConsult(name: any){
    this.bookName = name;
    if(this.bookName != null){
      this.livrosService.pages = 15;
      this.livrosService.calloutService(this.bookName).subscribe(dados => this.livros = dados.items, error => console.log(error)
      )
    }
  }

  showMore(){
    if(this.livrosService.pages <= 35){
      this.livrosService.pages = this.livrosService.pages + 5;
      this.livrosService.calloutService(this.bookName).subscribe(dados => this.livros = dados.items)
    }else{
      alert('O número máximo de livros exibidos foi excedido!')
    }
  }

  abrirTela(id: string){
    this.livro = this.livros.find((valor: any) => valor.volumeInfo.id === id)
  }


  ngOnInit(){
    this.livrosService.calloutService('Angular').subscribe(dados => this.livros = dados.items);
  }

}
