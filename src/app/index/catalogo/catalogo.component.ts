import { Component, OnInit, Input, Output } from '@angular/core';

import { ConsultaApiService } from './consulta-api.service';



@Component({
  selector: 'catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {

  constructor(private consultaApi: ConsultaApiService) { }

  bookName: string = '';
  res: any;
  livro: any;

  //Esta função faz uma consulta na API, passando os valores para a variável res

  handleConsultar(name: any){
    this.consultaApi.pages = 15;
    this.bookName = name;
    if(this.bookName != null){
      this.consultaApi.calloutService(this.bookName).then((valor) => {
        this.res = valor.items;
      }).catch((error) => console.log(error))
    }
  }

  //Esta função irá adicionar mais 5 na variavel pages, que é a variável que mostra o número de livros que irão aparecer

  showMore(){
     if(this.consultaApi.pages <= 35){
      this.consultaApi.pages = this.consultaApi.pages + 5;
      this.consultaApi.calloutService(this.bookName).then((valor) => {
      this.res = valor.items;}).catch((error) => console.log(error))
     }else{
       alert('O número máximo de livros exibidos foi excedido!')
     }
  }

  abrirTela(id: string){
    this.livro = this.res.filter((valor: any) => valor.volumeInfo.id === id);
  }

  ngOnInit(){
    this.consultaApi.pages = 15;
    this.consultaApi.calloutService('Angular').then((valor) => {
      this.res = valor.items;
    }).catch((error) => console.log(error))
  }

}
