import {Component, EventEmitter, inject, Input, Output} from '@angular/core';
import {IStudent} from '../../services/student-service';
import {Router, } from '@angular/router';

@Component({
  selector: 'app-student-card',
  imports: [
  ],
  templateUrl: './student-card.html',
  styleUrl: './student-card.css',
})
export class StudentCard {
  private router = inject(Router)

  @Input({required: true})
  student!: IStudent

  toggle: boolean = false;
  @Output() deleteStudent = new EventEmitter<number>();

  protected editStudent(student: IStudent) {
    this.router.navigate(['add-edit-student', student.id]);
  }

  handleDeleteStudent(id: number) {
    this.deleteStudent.emit(id);
  }

  toggleCard(){
    this.toggle = !this.toggle;
  }
}
