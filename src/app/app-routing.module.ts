import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { BodyComponent } from './body/body.component';
import { AboutComponent } from './about/about.component';
import { AboutModule } from './about/about.module';


const routes: Routes = [
  {path: 'home', component: BodyComponent},

  {path: 'about', component: AboutComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)], 
  exports: [RouterModule]

  
})
export class AppRoutingModule { }
