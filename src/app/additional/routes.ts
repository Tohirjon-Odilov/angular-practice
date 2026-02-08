import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: 'valyuta',
    loadComponent: () => import('./converter/converter').then((m) => m.Converter),
  },
  {
    path: 'todo-list-advanced',
    loadComponent: () =>
      import('./todo-list-advenced/todo-list-advenced').then((m) => m.TodoListAdvenced),
  },
  {
    path: 'math-game',
    loadComponent: () => import('./math-game/math-game').then((m) => m.MathGame),
  },
];
