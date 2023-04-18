import { Injectable } from '@angular/core';
import { UsersService } from 'src/app/user-info/users.service';

@Injectable({
  providedIn: 'root'
})
export class LivroDetalheService {

  indexComments: any = 0
  curtido: boolean[] = []
  naoGostei: boolean[] = []
  comments: any

  ngOnInit(){
    this.salvarComment()
    this.comments = this.userService.feedbacks
    this.curtido = []
    this.naoGostei = []
    for(let comment of this.comments){
      this.curtido.push(false)
      this.naoGostei.push(false)
    }
  }

  constructor(private userService: UsersService) {
    this.salvarComment()
   }

   handleGostei(id: number, parametro: string, index: number){
    if(parametro == 'gostei'){
      if(!this.curtido[index]){
        if(this.naoGostei[index]){
          this.naoGostei[index] = false
          this.userService.getFeedback(id)!.naoGostei--
        }
        this.curtido[index] = true
        this.userService.getFeedback(id)!.curtidas++
      }else{
        this.curtido[index] = false
        this.userService.getFeedback(id)!.curtidas--
      }
    }else if(parametro == 'naoGostei'){
      if(!this.naoGostei[index]){
        if(this.curtido[index]){
          this.curtido[index] = false
          this.userService.getFeedback(id)!.curtidas--
        }
        this.naoGostei[index] = true
        this.userService.getFeedback(id)!.naoGostei++
      }else{
        this.naoGostei[index] = false
        this.userService.getFeedback(id)!.naoGostei--
      }
    }
   }

  mostrarMais(limiteCaracter: number | boolean, livro: any, limitado: boolean | number){
    if(limiteCaracter == 350){
      limiteCaracter = livro.description.lenght
    }else{
      limiteCaracter = 350
    }
    limitado = !limitado
    let retorno = [limiteCaracter, limitado]
    return retorno
  }

  estrelaDisplay: boolean[]= [false, false, false, false, false]

  mostrarEstrela(indice: number){
    this.estrelaDisplay[indice] = true
    for(let i = indice; i >= 0; --i){
      this.estrelaDisplay[i] = true;
    }
    return this.estrelaDisplay
  }

  esconderEstrela(indice: number){
    if(this.estrelaDisplay[indice] == true){
      if(this.estrelaDisplay[indice + 1] == false || indice == 4){
        this.estrelaDisplay[indice] = false
      }else{
        for(let i = indice + 1; i < 5; ++i){

          this.estrelaDisplay[i] = false;
        }
      }
    }else{
      this.estrelaDisplay[indice] = false
      for(let i = indice; i >= 0; --i){
        this.estrelaDisplay[i] = false;
      }
    }
    return this.estrelaDisplay
  }

  enviarFeedback(user: any, estrelas: boolean[], comment: string, dataAtual: string, livroId: string){
    this.indexComments++
    localStorage.setItem('indexComments', this.indexComments.toString())
    let obj = JSON.stringify({id: this.userService.feedbacks.length + 1, data: dataAtual, descricao: comment, livroId: livroId, userId: user.usuario,curtidas: 0, naoGostei: 0, estrelas: estrelas})
    localStorage.setItem(`comments${this.indexComments}`, obj.toString())
    let dbComment: any = localStorage.getItem(`comments${this.indexComments}`)
    estrelas = JSON.parse(dbComment).estrelas
    this.userService.feedbacks.push({id: this.userService.feedbacks.length + 1, data: dataAtual, descricao: comment, livroId: livroId, userId: user.usuario, curtidas: 0, naoGostei: 0, estrelas: estrelas})
  }

  salvarComment(){
    this.indexComments = localStorage.getItem('indexComments')
    this.indexComments = Number(this.indexComments)
    for(let i = 1; i <= this.indexComments; i++){
      let comments: any = localStorage.getItem(`comments${i}`)
      comments = JSON.parse(comments)
      this.userService.feedbacks.push(comments)
    }
  }

}

