import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private usuariosService: UsuariosService, private location: Location ,
    private router: Router) { }
  public isLogged = false;

  ngOnInit(): void {

  }

  onLogout(): void {
    this.usuariosService.logoutUser();
    this.router.navigate(['']);
  }



}
