import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { UsersService } from '../users.service';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  mostrarMenuEmitter = new EventEmitter<boolean>();
  userAutenticated = new EventEmitter<boolean>();

  constructor(private userService: UsersService, private router: Router) {
    this.mostrarMenuEmitter.subscribe((v) => {
      localStorage.setItem('mostrarMenu',JSON.stringify(v))
    })
    this.userAutenticated.subscribe(v =>{
      localStorage.setItem('userAutenticated', JSON.stringify(v))
      this.userAut = localStorage.getItem('userAutenticated')
    })
   }

  mostrarUsuario = new EventEmitter<string>();
  mostrarUsuarioInfo = new EventEmitter<Usuario | any>();
  userAut: boolean | string | null = false;
  usuarioInfo: any;
  userDb: Usuario | any = '';

  fazerLogin(user: Usuario){
    let usuario = this.userService.getUser(user.nome);
    if(usuario != undefined){
      if(user.nome === usuario.usuario && user.senha === usuario.senha){
        this.router.navigate(['/livros']);
        this.userAutenticated.emit(true);
        this.mostrarMenuEmitter.emit(true);
        localStorage.setItem('usuario', JSON.stringify(usuario));
        this.userDb = localStorage.getItem('usuario');
        this.mostrarUsuario.emit(JSON.parse(this.userDb).usuario);
        this.usuarioInfo = usuario;
        this.mostrarUsuarioInfo.emit(this.usuarioInfo);
      }else{
          this.userAutenticated.emit(false);
          this.mostrarMenuEmitter.emit(false);
          alert('USUARIO NÃO REGISTRADO')
      }
    }else{
      this.userAutenticated.emit(false);
      this.mostrarMenuEmitter.emit(false);
      alert('USUARIO NÃO REGISTRADO')
    }
  }
  fazerLogoff(){
    this.router.navigate(['/userInfo/login']);
    this.userAutenticated.emit(false);
    this.mostrarMenuEmitter.emit(false);
    localStorage.clear();
  }
}
