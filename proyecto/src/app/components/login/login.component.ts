import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';

import { NgForm } from '@angular/forms/forms';
import { UserInterface } from 'src/app/models/user-interface';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public isError = false;
  mail ='';
  password = '';


  private user: UserInterface = {
    email: '',
    password: ''
  };

  constructor(private route: ActivatedRoute, private rutaActiva: ActivatedRoute, 
    private router: Router, private http: HttpClient, private usuariosService: UsuariosService) {}
  
  ngOnInit(): void {

  }

  onLogin(form: NgForm) {
    if (form.valid) {
      return this.usuariosService
        .loginuser(this.mail, this.password)
        .subscribe(
        data => {
          console.log(data);
          this.usuariosService.setUser(data.result);
          const token = data.result.idUsuario;
          this.usuariosService.setToken(token);

          if(data.result.rol == 1){

            console.log("BIENVENIDO CLIENTE")

          }else if(data.result.rol== 2) {

            console.log("BIENVENIDO PROVEEDOR")

          }

          //this.router.navigate(['/user/profile']);
          //location.reload();
          this.isError = false;
          
        },
        error => this.onIsError()
        );
    } else {
      this.onIsError();
      return
    }
  }

  onIsError(): void {
    this.isError = true;
    setTimeout(() => {
      this.isError = false;
    }, 4000);
  }

  actualizar(){
    console.log(this.mail);
    console.log(this.password);
    /*

    return this.http.post('http://34.72.4.108:5000/login',
    {
      email: this.mail,
      password: this.password

    }).subscribe((data) => {

      this.

      
    },
      error => console.log(error)
    );
    */
  }

}
