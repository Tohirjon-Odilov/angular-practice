import {Component, EventEmitter, inject, Input, OnInit, Output, QueryList, ViewChildren} from '@angular/core';
import {IStudent, StudentService} from '../../services/student-service';
import {StudentCard} from '../student-card/student-card';
import {RouterLink} from '@angular/router';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-student-list',
  imports: [
    StudentCard,
    RouterLink,
    FormsModule
  ],
  templateUrl: './student-list.html',
  styleUrl: './student-list.css',
})
export class StudentList implements OnInit {
  private studentService = inject(StudentService);
  @ViewChildren(StudentCard) cards!: QueryList<StudentCard>;

  students: IStudent[] = [];
  selectedSubject: string = '';
  selectedGrade: string = '';
  protected currentStudentName: string = '';

  ngOnInit(): void {
    this.students = this.studentService.getAll();
  }

  get uniqueSubjects(): string[] {
    const subjects = this.studentService.students.map(s => s.subject);
    return [...new Set(subjects)];
  }

  filterStudentByGrade(grade: Event) {
    const select = grade.target as HTMLSelectElement;
    this.selectedGrade = select.value

    this.students = [...this.studentService.getStudentByGrade(select.value)]
  }

  filterStudentBySubject(subject: Event) {
    const select = subject.target as HTMLSelectElement;
    this.selectedSubject = select.value

    this.students = [...this.studentService.getStudentsBySubject(select.value)];
  }

  searchStudentByName(studentName: string) {
    if(studentName) this.students = [...this.students.filter(s =>
      s.name.toLowerCase().includes(studentName.toLowerCase()))]
    else{
      this.students = [...this.studentService.students];
    }
  }

  resetFilter() {
    this.selectedSubject = '';
    this.selectedGrade = '';
    this.students = this.studentService.getAll();
  }

  protected toggleStudentCard(id: number) {
    this.cards.get(id)?.toggleCard()
  }

  protected handleDeleteStudent($event: number) {
    this.studentService.delete($event);
    this.students = this.studentService.getAll();
  }
}
