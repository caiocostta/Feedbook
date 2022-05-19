import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ConsultaApiService } from '../catalogo/consulta-api.service';


@Component({
  selector: 'livro-info',
  templateUrl: './livro-info.component.html',
  styleUrls: ['./livro-info.component.css']
})
export class LivroInfoComponent implements OnInit {

  constructor (private route: ActivatedRoute, private consultaApi: ConsultaApiService) {

    this.livroId = route.snapshot.params['id'];
    if(this.livroId != null){
      this.consultaApi.calloutServiceOnly(this.livroId).then((valor) => {
      this.getValor(valor);
      }).catch((error) => console.log(error))
    }
   }
  res: any;
  livroId: string;
  height: string = '250px';
  btnValue: string = 'Ver Mais';
  
   onShowMore(){
    if(this.height == '250px'){
      this.height = 'auto';
      this.btnValue = 'Ver Menos';
    }else{
      this.height = '250px';
      this.btnValue = 'Ver Mais';
    }
   }

  getValor(value: any){
    this.res = value;
  }

  ngOnInit(): void {
  }

}
