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

  fill: string = ''


  constructor(private route: ActivatedRoute,
              private router: Router , private consultaApi: ConsultaApiService,
              private userService: UsersService, private livroService: LivroDetalheService) {
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

    this.curtido = []
    this.naoGostei = []
    for(let comment of this.comments){
      this.curtido.push(false)
      this.naoGostei.push(false)
    }
  }

  estrelaDisplay: boolean[]= [false, false, false, false, false]

  newFeedback: string = ''

  enviarFeedback(){
    let dataAtual: any = new Date()

    this.livroService.enviarFeedback(this.user, this.estrelaDisplay, this.newFeedback, dataAtual.toString(), this.id)
    this.curtido = []
    this.naoGostei = []
    for(let comment of this.comments){
      this.curtido.push(false)
      this.naoGostei.push(false)
    }
    this.estrelaDisplay = [false, false, false, false, false]
    this.newFeedback = ''
  }

  mostrarEstrela(indice: number){
    this.estrelaDisplay = this.livroService.mostrarEstrela(indice)
  }

  esconderEstrela(indice: number){
    this.estrelaDisplay = this.livroService.esconderEstrela(indice)
  }



  curtido: boolean[] = []
  naoGostei: boolean[] = []


  handleGostei(id: number, parametro: string, index: number){
    this.livroService.handleGostei(id, parametro, index)
    if(parametro == 'gostei'){
      this.curtido[index] = !this.curtido[index]
      this.naoGostei[index] = false
    }else if(parametro == 'naoGostei'){
      this.naoGostei[index] = !this.naoGostei[index]
      this.curtido[index] = false
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
