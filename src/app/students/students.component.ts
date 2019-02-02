import { Component, OnInit } from '@angular/core';
import {STUDENTS} from './student-mock';
import {student_class} from './students';
import { StudentsService } from '../services/students.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  students: student_class[] = STUDENTS;
  selectedStudent: student_class;

  constructor(private studentsServices: StudentsService) { }

  ngOnInit() {
  }

loadStudents(){
  this.studentsServices.getStudents()
  .subscribe(students => this.students = STUDENTS); 
}

  onselectedStudent(st: student_class) {
    this.selectedStudent = st;
  }
}
