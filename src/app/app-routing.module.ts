import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { BodyComponent } from './body/body.component';


const routes: Routes = [
  {path: 'home', component: BodyComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)], 
  exports: [RouterModule]

  
})
export class AppRoutingModule { }
