import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  user: any;
  nomeUsuario: string = '';


  constructor(private userService: UsersService, private route: ActivatedRoute) {
    this.route.params.subscribe((params: any) => {
      this.nomeUsuario = params.nomeUsuario
      this.user = this.userService.getUser(this.nomeUsuario)
      console.log(this.user)
    })
   }

  ngOnInit(): void {
  }



}
