import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BodyComponent } from './body.component';
import { StudentsModule } from '../students/students.module';


@NgModule({
  declarations: [BodyComponent],
  imports: [
    CommonModule,
    StudentsModule,
  
  ],

  exports:[BodyComponent]
})
export class BodyModule { }
