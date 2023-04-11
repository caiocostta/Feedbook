import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { ConsultaApiService } from '../consulta-api.service';
import { UsersService } from 'src/app/user-info/users.service';



@Component({
  selector: 'app-livro-detalhe',
  templateUrl: './livro-detalhe.component.html',
  styleUrls: ['./livro-detalhe.component.css']
})
export class LivroDetalheComponent implements OnInit {

  id: any;
  inscricao: Subscription = new Subscription;
  livro: any;
  limiteCaracter: number = 350;
  limitado: boolean = true


  constructor(private route: ActivatedRoute, private router: Router ,  private consultaApi: ConsultaApiService, private userService: UsersService) {
    this.route.params.subscribe(
      (params: any) => {
        this.id = params['id'];
        this.consultaApi.calloutServiceOnly(this.id).subscribe(
          (valor: any) => {
            this.getLivro(valor.volumeInfo)
          }, (e) => {
            router.navigate(['/livros/naoEncontrado'])
          })
      }
    );

  }

  comments: any

  ngOnInit(){
    this.comments = this.userService.users
  }

  getLivro(valor: any){
    this.livro = valor;
  }
  mostrarMais(){
    if(this.limiteCaracter == 350){
      this.limiteCaracter = this.livro.description.lenght
    }else{
      this.limiteCaracter = 350
    }
    this.limitado = !this.limitado
  }

  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }
}
