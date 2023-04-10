import { Component, Injectable, OnInit } from '@angular/core';
import { Router, Route } from '@angular/router';
import { AuthService } from '../user-info/login/auth.service';
import { UsersService } from '../user-info/users.service';


@Component({
  selector: 'cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.css']
})
export class CabecalhoComponent implements OnInit {

  nomeUsuario: string = '';
  userOnOff: boolean = false;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.mostrarMenuEmitter.subscribe(m => { this.userOnOff = m});
    this.authService.mostrarUsuario.subscribe(u => {this.nomeUsuario = u});
  }

  userLogoff(){
    this.authService.fazerLogoff();
  }
}
