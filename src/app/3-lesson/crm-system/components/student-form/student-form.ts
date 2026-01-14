import {Component, Input} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Student} from '../../services/student-service';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-student-form',
  imports: [
    FormsModule,
    RouterLink
  ],
  templateUrl: './student-form.html',
  styleUrl: './student-form.css',
})
export class StudentForm {
  protected studentName: string = "";
  protected studentSubject: string = "";
  protected studentPoint: number = 0;
  protected studentGrade: string = "";
  protected studentEmail: string = "";

  @Input() student: Student | null | undefined = null;

  protected addOrEditStudent() {

  }
}
