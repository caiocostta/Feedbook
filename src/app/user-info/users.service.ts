import { Injectable } from '@angular/core';
import { LivrosComponent } from '../livros/livros.component';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  users: any[] = [
    {nome: 'Caio Costa', usuario: 'caioken__', email: 'caio.08costa@gmail.com', tel: 11996083908, senha: '12345', foto: 'perfil.jpeg', feedbacks: [
                                                                                                                                                    {data: '11/04/2023', descricao: 'Gostei do livro', livroId: 'tL6aDAEACAAJ'},
                                                                                                                                                    {data: '01/04/2023', descricao: 'Achei Mais ou menos', livroId: 'tL6aDAEACAAJ'}
                                                                                                                                                  ]},
    {nome: 'João Santos', usuario: 'joaozinho', email: 'jsantos@gmail.com', tel: 11954855648, senha: '54321', foto: 'perfil2.jpg', feedbacks: [{data: '08/04/2023', descricao: 'Não gostei do livro', livroId: 'tL6aDAEACAAJ'}]},
    {nome: 'Maria Costa', usuario: 'ma.costa123', email: 'ma.costa123@gmail.com', tel: 11954871254, senha: '00000', foto: 'perfil3.jpg', feedbacks: [{data: '01/04/2023', descricao: 'Odiei o livro', livroId: 'C1QoDwAAQBAJ'}]}
  ];

  getUsers(){
    return this.users;
  }

  getUser(usuario: any){
    const users = this.getUsers();

    return users.find((user: any) => user.usuario == usuario);
  }

}
