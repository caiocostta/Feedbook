import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ViewChild, ElementRef } from '@angular/core';

import { ConsultaApiService } from '../consulta-api.service';
import { UsersService } from 'src/app/user-info/users.service';
import { LivroDetalheService } from './livro-detalhe.service';



@Component({
  selector: 'app-livro-detalhe',
  templateUrl: './livro-detalhe.component.html',
  styleUrls: ['./livro-detalhe.component.css']
})
export class LivroDetalheComponent implements OnInit {

  id: any;
  inscricao: Subscription = new Subscription;
  livro: any;
  limiteCaracter: any = 350;
  limitado: any = true


  constructor(private route: ActivatedRoute,
              private router: Router , private consultaApi: ConsultaApiService,
              private userService: UsersService, private livroService: LivroDetalheService,
              private elementRef: ElementRef) {
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

  users: any
  comments: any
  user: any

  ngOnInit(){
    this.users = this.userService.users
    this.comments = this.userService.feedbacks
    this.user = localStorage.getItem('usuario')
    this.user = JSON.parse(this.user)
  }

  estrelaDisplay: boolean[]= [false, false, false, false, false]

  newFeedback: string = ''

  enviarFeedback(){
    let dataAtual: any = new Date()

    this.livroService.enviarFeedback(this.user, this.estrelaDisplay, this.newFeedback, dataAtual.toString(), this.id)
  }

  mostrarEstrela(indice: number){
    this.estrelaDisplay = this.livroService.mostrarEstrela(indice)
  }

  esconderEstrela(indice: number){
    this.estrelaDisplay = this.livroService.esconderEstrela(indice)
  }

  curtido: boolean = false
  naoGostei: boolean = false



  handleGostei(id: number, parametro: string, botaoId: string){
    this.livroService.handleGostei(id, parametro)
    if(parametro == 'gostei'){
      this.curtido = !this.curtido
      this.naoGostei = false
    }else if(parametro == 'naoGostei'){
      this.naoGostei = !this.naoGostei
      this.curtido = false
    }
  }

  getLivro(valor: any){
    this.livro = valor;
  }

  mostrarMais(){
    this.limiteCaracter = this.livroService.mostrarMais(this.limiteCaracter, this.livro, this.limitado)[0]
    this.limitado = this.livroService.mostrarMais(this.limiteCaracter, this.livro, this.limitado)[1]
  }

  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }
}
