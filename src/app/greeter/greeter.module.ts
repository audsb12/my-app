import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GreeterComponent } from './greeter.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [GreeterComponent],
  imports: [
    CommonModule,
    FormsModule
  ],


  exports: [GreeterComponent]
})
export class GreeterModule { }
