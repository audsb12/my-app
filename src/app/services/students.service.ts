import { Injectable } from '@angular/core';
import { STUDENTS } from '../students/student-mock';
import { student_class } from '../students/students';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  getStudents(): Observable<student_class[]> {
  return of (STUDENTS);

  
  }

  constructor() { }
}
