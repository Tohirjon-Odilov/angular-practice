import {Injectable} from '@angular/core';

export interface IStudent {
  id: number;
  name: string;
  email: string;
  subject: string;
  point: number;
  grade: "A" | "B" | "C" | "D";
  role?: "student" | "admin";
}

export class Student implements IStudent {
    id: number;
    name: string;
    email: string;
    subject: string;
    point: number;
    grade: "A" | "B" | "C" | "D";
    role?: "student" | "admin";

    constructor(id: number, name: string, email: string, subject: string, point: number) {
      this.id = id;
      this.name = name;
      this.email = email;
      this.subject = subject;
      this.point = point;
      this.grade = "A";
      this.role = "student";
    }
}

@Injectable({
  providedIn: 'root',
})

export class StudentService {
  students: IStudent[] = [
    {
      id: 1,
      name: "Javohir Abdullayev",
      email: "javohir.a@example.com",
      subject: "Computer Science",
      point: 88,
      grade: "B"
    },
    {
      id: 2,
      name: "Malika Karimova",
      email: "malika.k@example.com",
      subject: "Mathematics",
      point: 95,
      grade: "A"
    },
    {
      id: 3,
      name: "Sardor Rahimov",
      email: "sardor.r@example.com",
      subject: "Physics",
      point: 76,
      grade: "C"
    },
    {
      id: 4,
      name: "Dildora Usmonova",
      email: "dildora.u@example.com",
      subject: "English Literature",
      point: 92,
      grade: "A"
    },
    {
      id: 5,
      name: "Bekzod Tursunov",
      email: "bekzod.t@example.com",
      subject: "History",
      point: 85,
      grade: "B"
    },
    {
      id: 6,
      name: "Aziza Saidova",
      email: "aziza.s@example.com",
      subject: "Biology",
      point: 79,
      grade: "C"
    },
    {
      id: 7,
      name: "Otabek Mirzayev",
      email: "otabek.m@example.com",
      subject: "Chemistry",
      point: 68,
      grade: "D"
    },
    {
      id: 8,
      name: "Nigora Aliyeva",
      email: "nigora.a@example.com",
      subject: "Computer Science",
      point: 91,
      grade: "A"
    },
    {
      id: 9,
      name: "Sherzod Qodirov",
      email: "sherzod.q@example.com",
      subject: "Economics",
      point: 74,
      grade: "C"
    },
    {
      id: 10,
      name: "Gulnoza Ahmedova",
      email: "gulnoza.a@example.com",
      subject: "Psychology",
      point: 89,
      grade: "B"
    }
  ];

  add(student: IStudent): void {
    this.students.push(student);
  }

  update(student: IStudent): void {
    const studentId = this.students.findIndex(s => s.id === student.id);
    if (studentId !== -1) {
      this.students[studentId] = (student);
    }
  }

  delete(studentId: number): void {
    this.students = this.students.filter(s => s.id !== studentId);
  }

  getAll(): IStudent[] {
    return this.students;
  }

  getById(studentId: number): IStudent | undefined {
    return this.students.find(s => s.id === studentId);
  }

  getStudentsBySubject(subject: string): IStudent[] {
    return this.students.filter(s => s.subject === subject);
  }

  getStudentByGrade(grade: string): IStudent[] {
    return this.students.filter(s => s.grade === grade);
  }

  getAverageScore(): number {
    if (this.students.length > 0) return 0;
    const total = this.students.reduce((sum, s) =>
      sum + s.point, 0)

    return total / this.students.length;
  }

  getTopStudent(): IStudent | undefined {
    if (this.students.length === 0) return undefined;
    return this.students.reduce((top, current) =>
      current.point > top.point ? current : top
    )
  }

  getStudent(studentName: string): IStudent[] | undefined {
    return this.students.filter(s => s.name === studentName);
  }
}
