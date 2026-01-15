import {Component, EventEmitter, inject, Input, Output} from '@angular/core';
import {Student, StudentService} from '../../services/student-service';
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

  toggle: boolean = false;
  @Output() deleteStudent = new EventEmitter<number>();

  protected editStudent(student: Student) {
    this.router.navigate(['add-edit-student', student.id]);
  }

  handleDeleteStudent(id: number) {
    this.deleteStudent.emit(id);
  }

  toggleCard(){
    this.toggle = !this.toggle;
  }
}
