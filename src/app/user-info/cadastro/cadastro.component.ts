import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators'

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  formulario: FormGroup = new FormGroup({});

  constructor(private httpClient: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.formulario = new FormGroup({
      nome: new FormControl(null, Validators.required),
      usuario: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      tel: new FormControl(null, Validators.required),
      senha: new FormControl(null, Validators.required),
      confSenha: new FormControl(null, Validators.required),
    })
  }

  onSubmit(){
    if(this.formulario.value.senha === this.formulario.value.confSenha){
    this.httpClient.post('https://httpbin.org/post', JSON.stringify(this.formulario.value))
    .pipe(map(res => res))
    .subscribe(dados => console.log(dados));
    this.router.navigate(['/userInfo/login'])
    }else{
      alert('As senhas necessitam serem iguais.')
    }
  }

  verificaValidTouched(campo: any){

    return !this.formulario.get(campo)?.valid && this.formulario.get(campo)?.touched;
  }

  aplcaCssErro(campo: any){
    return{
      'has-error': this.verificaValidTouched(campo),
      'has-feedback': this.verificaValidTouched(campo)
    }
  }

}
