import { Component, OnInit, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { UsersService } from './users.service';
import { AuthService } from './login/auth.service';
import { Usuario } from './login/usuario';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  botaoEditar: boolean | string | null= false;
  user: any;
  nomeUsuario: string = '';
  usuarioLogado: Usuario | any = '';

  isActive: boolean = true

  constructor(private userService: UsersService, private route: ActivatedRoute, private authService: AuthService) {
    this.route.params.subscribe((params: any) => {
      this.nomeUsuario = params.nomeUsuario
      this.user = this.userService.getUser(this.nomeUsuario)


      this.usuarioLogado = localStorage.getItem('usuario')
      this.usuarioLogado = JSON.parse(this.usuarioLogado)?.usuario
      if(this.nomeUsuario == this.usuarioLogado){
        this.botaoEditar = localStorage.getItem('mostrarMenu')
      }else{
        this.botaoEditar = false
      }
    })

   }

  ngOnInit(): void {
    this.authService.mostrarMenuEmitter.subscribe(v => {
      if(this.nomeUsuario == this.usuarioLogado){
        this.botaoEditar = v
      }else{
        this.botaoEditar = false
      }
    })
    if(this.nomeUsuario != this.usuarioLogado){
      this.botaoEditar = false
    }else{
      this.botaoEditar = localStorage.getItem('userAutenticated')
    }
  }



}
