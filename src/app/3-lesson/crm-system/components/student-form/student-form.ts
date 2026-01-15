import {Component, inject, Input} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Student, StudentService} from '../../services/student-service';
import {Router, RouterLink} from '@angular/router';

@Component({
  selector: 'app-student-form',
  imports: [
    FormsModule,
    RouterLink
  ],
  standalone: true,
  templateUrl: './student-form.html',
  styleUrl: './student-form.css',
})
export class StudentForm {
  private studentService = inject(StudentService);
  private navigate = inject(Router);

  protected studentName: string = "";
  protected studentSubject: string = "";
  protected studentPoint!: number;
  protected studentGrade: string = "";
  protected studentEmail: string = "";

  @Input() student!: Student;
  currentStudent!: Student;

  protected addOrEditStudent() {
    if (!this.student) {
      this.currentStudent = {
        id: Date.now(),
        name: this.studentName,
        grade: this.studentGrade,
        email: this.studentEmail,
        subject: this.studentSubject,
        point: this.studentPoint
      }

      this.studentService.students.push(this.currentStudent);
      this.reset()
      console.log(this.studentService.students)
    } else {
      this.currentStudent = {
        id: Date.now(),
        name: this.studentName,
        grade: this.studentGrade,
        email: this.studentEmail,
        subject: this.studentSubject,
        point: this.studentPoint
      }

      this.studentService.students.push(this.currentStudent);
      this.reset()
      console.log(this.studentService.students)
    }
  }

  reset() {
    this.navigate.navigate(["/crm-system"])
  }
}
