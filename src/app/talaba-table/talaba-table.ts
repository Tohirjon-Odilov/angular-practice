import {Component, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';

interface Student {
  id: number;
  name: string;
  point: number;
}

@Component({
  selector: 'app-talaba-table',
  standalone: true,
  imports: [FormsModule],
  templateUrl: "talaba-table.html",
  styleUrl: "talaba-table.css"
})

export class TalabaTableComponent {
  students: Student[] = [];
  message = signal<string | null>(null);
  currentName: string | null = null;
  currentPoint: number | null = null;
  timeoutId: any = null;

  addStudent() {
    if (this.currentName == null || this.currentPoint == null) {
      this.showMessage("Iltimos inputlarni to'ldiring :(");
      return;
    }

    let student: Student = {
      id: this.students?.length + 1,
      name: this.currentName,
      point: this.currentPoint
    }
    this.students.push(student);
    this.currentName = "";
    this.currentPoint = 0;

    this.showMessage("Talaba qo'shildi :)")
  }

  removeStudent(student: Student) {
    if (this.students != null) {
      this.students = this.students.filter((a: Student) => a.id != student.id)
      this.showMessage("Talaba o'chirildi!");
    }
  }

  clearStudents() {
    if (this.students != null) {
      this.students = [];
      this.showMessage("Ro'yhat tozalandi!")
    }
  }

  showMessage(msg: string){
    this.message.set(msg);

    if(this.timeoutId){
      clearTimeout(this.timeoutId)
    }

    this.timeoutId = setTimeout(() => {
      this.message.set(null);
    }, 3000)
  }
}
