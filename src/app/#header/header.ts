import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';

interface Lesson{
  title: string;
  description: string;
  path: string;
}

@Component({
  selector: 'app-header',
  imports: [
    RouterLink
  ],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  lessons: Lesson[] = [
    {
      title: "1-lesson",
      description: "Increase",
      path: "increase"
    },
    {
      title: "1-lesson",
      description: "Calculator",
      path: "calculator"
    },
    {
      title: "2-lesson",
      description: "Student Table",
      path: "student-table"
    },
    {
      title: "3-lesson",
      description: "Crm System",
      path: "crm-system"
    },
    {
      title: "4-lesson",
      description: "Simple users app",
      path: "simple-users-app"
    },
    {
      title: "Qo'shimcha",
      description: "Qo'shimcha",
      path: "additional"
    }
  ]
}
