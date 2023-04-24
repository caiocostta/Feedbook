import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() {}

  users = [
    {nome: 'Caio Costa', usuario: 'caioken__', email: 'caio.08costa@gmail.com', tel: 11996083908, senha: '12345', foto: 'perfil.jpeg', seguidores: 100, livrosFavoritos: ['tL6aDAEACAAJ'], genero: 'masculino'},
    {nome: 'João Santos', usuario: 'joaozinho', email: 'jsantos@gmail.com', tel: 11954855648, senha: '54321', foto: 'perfil2.jpg', seguidores: 150, livrosFavoritos: [], genero: 'masculino'},
    {nome: 'Maria Costa', usuario: 'ma.costa123', email: 'ma.costa123@gmail.com', tel: 11954871254, senha: '00000', foto: 'perfil3.jpg', seguidores: 50, livrosFavoritos: [], genero: 'feminino'}
  ];
  feedbacks = [
    {id: 1 , data: '11/04/2023 13:46', descricao: 'Gostei do livro', livroId: 'tL6aDAEACAAJ', userId: 'caioken__', curtidas: 3, naoGostei: 5, estrelas: [true, true, true, true, false]},
    {id: 2 , data: '01/04/2023 08:54', descricao: 'Achei Mais ou menos', livroId: 'tL6aDAEACAAJ', userId: 'caioken__', curtidas: 5, naoGostei: 1, estrelas: [true, true, true, false, false]},
    {id: 3 , data: '08/04/2023 09:48', descricao: 'Nao gostei do livro', livroId: 'tL6aDAEACAAJ', userId: 'ma.costa123', curtidas: 3, naoGostei: 3, estrelas: [true, true, false, false, false]},
    {id: 4 , data: '01/04/2023 17:30', descricao: 'Odiei o livro', livroId: 'C1QoDwAAQBAJ', userId: 'joaozinho', curtidas: 1, naoGostei: 2, estrelas: [true, false, false, false, false]}
  ]


  getFeedbacks(){
    return this.feedbacks
  }
  getFeedback(id: number){
    const feedbacks: any = this.getFeedbacks();
    return this.feedbacks.find((feedback: any) => id == feedback.id)
  }
  getFeedbackByUser(usuario: string){
    const feedbacks: any = this.getFeedbacks();
    return this.feedbacks.filter((feedback: any) => usuario == feedback.userId)
  }

  getUsers(){
    return this.users;
  }

  getUser(usuario: any){
    const users = this.getUsers();

    return users.find((user: any) => user.usuario == usuario);
  }

}
