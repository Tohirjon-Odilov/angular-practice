import {Component, EventEmitter, inject, Input, OnInit, Output} from '@angular/core';
import {Student, StudentService} from '../../services/student-service';
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

  students: Student[] = [];
  selectedSubject: string = '';
  selectedGrade: string = '';
  protected currentStudentName: string = '';

  ngOnInit(): void {
    this.students = this.studentService.students;
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
    this.students = this.studentService.students;
  }
}
