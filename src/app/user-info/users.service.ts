import { Injectable } from '@angular/core';
import { LivrosComponent } from '../livros/livros.component';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  users: any[] = [
    {nome: 'Caio Costa', usuario: 'caioken__', email: 'caio.08costa@gmail.com', tel: 11996083908, senha: '12345'},
    {nome: 'João Santos', usuario: 'joaozinho', email: 'jsantos@gmail.com', tel: 11954855648, senha: '54321'},
    {nome: 'Maria Costa', usuario: 'ma.costa123', email: 'ma.costa123@gmail.com', tel: 11954871254, senha: '00000'}
  ];

  getUsers(){
    return this.users;
  }

  getUser(usuario: any){
    const users = this.getUsers();

    return users.find((user: any) => user.usuario == usuario);
  }

}
