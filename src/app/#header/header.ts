import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';

export interface Lesson{
  title: string;
  description: string;
  path: string;
}

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  lessons: Lesson[] = [
    {
      title: '1-lesson',
      description: 'Increase',
      path: 'increase',
    },
    {
      title: '1-lesson',
      description: 'Calculator',
      path: 'calculator',
    },
    {
      title: '2-lesson',
      description: 'Student Table',
      path: 'student-table',
    },
    {
      title: '3-lesson',
      description: 'Crm System',
      path: 'crm-system',
    },
    {
      title: '4-lesson',
      description: 'Simple users app',
      path: 'simple-users-app',
    },
    {
      title: '5-lesson',
      description: 'Forms and validation',
      path: 'forms-validation',
    },
    {
      title: '6-lesson',
      description: 'Simple users app',
      path: 'simple-users-app',
    },
    {
      title: '7-lesson',
      description: 'Debounce Input ...',
      path: 'rxjs',
    },
    {
      title: '8-lesson',
      description: 'Timer',
      path: 'signal',
    },
    {
      title: "Qo'shimcha",
      description: "Qo'shimcha",
      path: 'additional/valyuta',
    },
  ];
}
