import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from "../app/components/login/login.component";
import { HomeComponent } from "../app/components/home/home.component";
import {NotFoundComponent } from "../app/components/not-found/not-found.component";

const routes: Routes = [
  
  { path: 'login', component:LoginComponent},
  { path: '', component:HomeComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
