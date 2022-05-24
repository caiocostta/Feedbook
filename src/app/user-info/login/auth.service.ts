import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { UsersService } from '../users.service';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private userService: UsersService, private router: Router) { }

  mostrarMenuEmitter = new EventEmitter<boolean>();
  mostrarUsuario = new EventEmitter<string>();
  mostrarUsuarioInfo = new EventEmitter<any>();
  userAutenticated: boolean = false;
  usuarioInfo: any;
  username: string = '';

  fazerLogin(user: Usuario){
    let usuario = this.userService.getUser(user.nome);
    if(usuario != null && usuario != undefined){
      this.userAutenticated = true;
      this.mostrarMenuEmitter.emit(true);
      this.username = usuario.usuario;
      this.mostrarUsuario.emit(this.username);
      this.usuarioInfo = usuario;
      this.mostrarUsuarioInfo.emit(this.usuarioInfo);
      if(user.nome === usuario.usuario && user.senha === usuario.senha){
        this.router.navigate(['/livros']);
      }
    }else{
        this.userAutenticated = false;
        this.mostrarMenuEmitter.emit(false);
        alert('USUARIO NÃO REGISTRADO')
    }
  }
  fazerLogoff(){
    this.router.navigate(['/userInfo/login']);
    this.userAutenticated = false;
    this.mostrarMenuEmitter.emit(false);
  }

  usuarioAutenticado(){
    return this.userAutenticated;
  }
}
