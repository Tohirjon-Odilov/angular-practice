import {Component, inject, Input, OnInit} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Student, StudentService} from '../../services/student-service';
import {ActivatedRoute, Router, RouterLink} from '@angular/router';

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
export class StudentForm implements OnInit {
  private studentService = inject(StudentService);
  private navigate = inject(Router);
  private route = inject(ActivatedRoute);

  protected studentId!: number;
  protected studentName: string = "";
  protected studentSubject: string = "";
  protected studentPoint!: number;
  protected studentGrade: string = "";
  protected studentEmail: string = "";

  @Input() student: Student | undefined;
  currentStudent!: Student;

  ngOnInit(): void {
    const studentIdParam = this.route.snapshot.paramMap.get('studentId');

    if (studentIdParam) {
      const id = Number(studentIdParam);
      this.student = this.studentService.getById(id);

      if (this.student) {
        this.studentId = this.student.id;
        this.studentName = this.student.name;
        this.studentSubject = this.student.subject;
        this.studentPoint = this.student.point;
        this.studentGrade = this.student.grade;
        this.studentEmail = this.student.email;
      }
    }
  }

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
    } else {
      this.currentStudent = {
        id: this.student.id,
        name: this.studentName,
        grade: this.studentGrade,
        email: this.studentEmail,
        subject: this.studentSubject,
        point: this.studentPoint
      }

      this.studentService.students.map((s: Student) => {
        if(s.id === this.currentStudent.id) {
          s.grade = this.studentGrade;
          s.name = this.studentName;
          s.point = this.studentPoint;
          s.email = this.studentEmail;
          s.subject = this.studentSubject;
        }
      });
      this.reset()
    }
  }

  reset() {
    this.navigate.navigate(["/crm-system"])
  }
}
