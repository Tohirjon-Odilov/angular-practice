import {Component, inject, Input} from '@angular/core';
import {Student} from '../../services/student-service';
import {Router, RouterLink} from '@angular/router';

@Component({
  selector: 'app-student-card',
  imports: [
    RouterLink
  ],
  templateUrl: './student-card.html',
  styleUrl: './student-card.css',
})
export class StudentCard {
  private router = inject(Router)

  @Input({required: true})
  student!: Student

  protected editStudent(student: Student) {
    this.router.navigate(['add-edit-student', student.id]);
  }

  protected deleteStudent(id: number) {

  }
}
