import { Component, OnInit } from '@angular/core';
import {STUDENTS} from './student-mock';
import {student_class} from './students';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  students: student_class[] = STUDENTS;
  selectedStudent: student_class;

  constructor() { }

  ngOnInit() {
  }


  onselectedStudent(st: student_class) {
    this.selectedStudent = st;
  }
}
