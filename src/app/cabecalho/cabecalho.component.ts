import { Component, Injectable, OnInit } from '@angular/core';
import { Router, Route } from '@angular/router';

import { AuthService } from '../user-info/login/auth.service';
import { Usuario } from '../user-info/login/usuario';
import { UsersService } from '../user-info/users.service';


@Component({
  selector: 'cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.css']
})
export class CabecalhoComponent implements OnInit {




  nomeUsuario: Usuario | any = '';

  userOnOff: boolean | string | null = false;

  userInfo: any;

  constructor(private authService: AuthService, private userService: UsersService) {
    this.userOnOff = localStorage.getItem('mostrarMenu')
    this.nomeUsuario = localStorage.getItem('usuario')
    this.nomeUsuario = JSON.parse(this.nomeUsuario)?.usuario
    this.userInfo = this.userService.getUser(this.nomeUsuario)
  }

  ngOnInit(): void {
    this.authService.mostrarMenuEmitter.subscribe(v => {
      this.userOnOff = v
    })
    this.authService.mostrarUsuario.subscribe(u => {
      this.nomeUsuario = JSON.parse(this.authService.userDb).usuario
    });
  }

  userLogoff(){
    this.authService.fazerLogoff();
  }
}
