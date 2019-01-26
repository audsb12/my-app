import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsComponent } from './students.component';
import { StudentsInfoComponent } from './students-info/students-info.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [StudentsComponent, StudentsInfoComponent],
  imports: [
    FormsModule,
    CommonModule
  ],

  exports: [StudentsComponent, StudentsInfoComponent]
})
export class StudentsModule { }
