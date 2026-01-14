import {Component, OnInit} from '@angular/core';
import {StudentList} from './components/student-list/student-list';

@Component({
  selector: 'app-crm-system',
  imports: [
    StudentList
  ],
  templateUrl: './crm-system.html',
  styleUrl: './crm-system.css',
})
export class CrmSystem {

}
