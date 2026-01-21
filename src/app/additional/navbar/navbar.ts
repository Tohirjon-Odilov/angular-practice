import { Component } from '@angular/core';
import { Lesson } from '../../#header/header';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  navbarItems: Lesson[] = [
    {
      title: "Back to main",
      description: "Back to main page",
      path: '/'
    },
    {
      title: 'Valyuta',
      description: 'Valyuta konverter',
      path: '/valyuta',
    },
    {
      title: 'Todo list',
      description: 'Todo list (Advenced)',
      path: '/todo-list-advanced',
    },
    {
      title: 'Math game',
      description: 'Math game',
      path: '/math-game',
    },
  ];
}
