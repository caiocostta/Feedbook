import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { ConsultaApiService } from '../consulta-api.service';


@Component({
  selector: 'app-livro-detalhe',
  templateUrl: './livro-detalhe.component.html',
  styleUrls: ['./livro-detalhe.component.css']
})
export class LivroDetalheComponent implements OnInit {

  id: any;
  inscricao: Subscription = new Subscription;
  livro: any;
  imageLinks: any;
  img: any;
  title: any;
  author: any;
  categories: any;
  description: any;

  constructor(private route: ActivatedRoute, private router: Router, private consultaApi: ConsultaApiService) { 
    this.route.params.subscribe(
      (params: any) => { this.id = params['id']; 
      this.consultaApi.calloutServiceOnly(this.id).subscribe((valor: any) => this.getLivro(valor.volumeInfo))} 
    );
    
  }

  ngOnInit(){}

  getLivro(valor: any){
    this.livro = valor;
  }

  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }
}
