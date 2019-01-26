import { Component, OnInit, Input } from '@angular/core';
import { student_class } from '../students';

@Component({
  selector: 'app-students-info',
  templateUrl: './students-info.component.html',
  styleUrls: ['./students-info.component.css']
})
export class StudentsInfoComponent implements OnInit {
  @Input() studentinfo: student_class;

  constructor() { }

  ngOnInit() {
  }

}
