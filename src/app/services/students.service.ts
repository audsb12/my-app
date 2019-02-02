import { Injectable } from '@angular/core';
import { STUDENTS } from '../students/student-mock';
import { student_class } from '../students/students';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  getStudents(): student_class[] {
    return STUDENTS;
  }

  constructor() { }
}
